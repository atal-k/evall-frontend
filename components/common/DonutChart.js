// ============================================================================
// FILE: src/components/common/DonutChart.jsx
// ============================================================================

import { useEffect, useRef, useState } from "react";
import './DonutChart.css'
import { formatCurrency } from "../../utils/formatter";
/**
 * Reusable Donut Chart Component using HTML5 Canvas
 * Features: Multi-segment support, tooltips, smooth animations
 * 
 * @param {Array} data - Chart data [{ label, value, color }]
 * @param {number} width - Chart width (default: 300)
 * @param {number} height - Chart height (default: 300)
 * @param {number} donutThickness - Thickness of donut ring (default: 60)
 * @param {boolean} showLegend - Show legend (default: true)
 * @param {boolean} animate - Enable animation (default: true)
 */
const DonutChart = ({ 
    data = [], 
    width = 300, 
    height = 300, 
    donutThickness = 60,
    showLegend = true,
    animate = true,
    className = ''
  }) => {
    const canvasRef = useRef(null);
    const [hoveredSegment, setHoveredSegment] = useState(null);
    const [animationProgress, setAnimationProgress] = useState(0);
    const animationFrameRef = useRef(null);
  
    // Calculate total value
    const total = data.reduce((sum, item) => sum + item.value, 0);
  
    // Calculate percentages and angles
    const segments = data.map((item, index) => {
      const percentage = (item.value / total) * 100;
      const angle = (item.value / total) * Math.PI * 2;
      return {
        ...item,
        percentage,
        angle
      };
    });
  
    // Animation effect
    useEffect(() => {
      if (!animate) {
        setAnimationProgress(1);
        return;
      }

      const duration = 800;
      const startTime = Date.now();

      const animateChart = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const eased = 1 - Math.pow(1 - progress, 3);
        setAnimationProgress(eased);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animateChart);
        }
      };

      animateChart();

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [animate]);
    // Draw chart
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext('2d');
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) / 2 - 10;
      const innerRadius = radius - donutThickness;
  
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
  
      // Draw segments
      let currentAngle = -Math.PI / 2; // Start from top
  
      segments.forEach((segment, index) => {
        const segmentAngle = segment.angle * animationProgress;
        
        // Draw outer arc
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + segmentAngle);
        ctx.arc(centerX, centerY, innerRadius, currentAngle + segmentAngle, currentAngle, true);
        ctx.closePath();
  
        // Fill with color (lighten if hovered)
        if (hoveredSegment === index) {
          ctx.fillStyle = lightenColor(segment.color, 20);
          ctx.shadowBlur = 15;
          ctx.shadowColor = segment.color;
        } else {
          ctx.fillStyle = segment.color;
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
  
        currentAngle += segmentAngle;
      });
  
      // Draw center circle (donut hole)
      ctx.beginPath();
      ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
  
    }, [data, width, height, donutThickness, hoveredSegment, animationProgress, segments]);
  
    // Mouse move handler for tooltip
    const handleMouseMove = (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const centerX = width / 2;
      const centerY = height / 2;
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const radius = Math.min(width, height) / 2 - 10;
      const innerRadius = radius - donutThickness;
  
      // Check if mouse is within donut ring
      if (distance >= innerRadius && distance <= radius) {
        let angle = Math.atan2(dy, dx) + Math.PI / 2;
        if (angle < 0) angle += Math.PI * 2;
  
        // Find which segment
        let currentAngle = 0;
        let foundSegment = null;
  
        for (let i = 0; i < segments.length; i++) {
          if (angle >= currentAngle && angle < currentAngle + segments[i].angle) {
            foundSegment = i;
            break;
          }
          currentAngle += segments[i].angle;
        }
  
        setHoveredSegment(foundSegment);
        canvas.style.cursor = foundSegment !== null ? 'pointer' : 'default';
      } else {
        setHoveredSegment(null);
        canvas.style.cursor = 'default';
      }
    };
  
    const handleMouseLeave = () => {
      setHoveredSegment(null);
    };
  
    return (
      <div className={`donut-chart ${className}`}>
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="donut-chart__canvas"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        
        {showLegend && (
          <div className="donut-chart__legend">
            {segments.map((segment, index) => (
              <div 
                key={index} 
                className={`donut-chart__legend-item ${hoveredSegment === index ? 'donut-chart__legend-item--active' : ''}`}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
              >
                <span 
                  className="donut-chart__legend-color" 
                  style={{ backgroundColor: segment.color }}
                ></span>
                <span className="donut-chart__legend-label">{segment.label}</span>
              </div>
            ))}
          </div>
        )}
  
        {hoveredSegment !== null && (
          <div className="donut-chart__tooltip">
            <div className="donut-chart__tooltip-label">
              {segments[hoveredSegment].label}
            </div>
            <div className="donut-chart__tooltip-value">
              {formatCurrency(segments[hoveredSegment].value)}
            </div>
            <div className="donut-chart__tooltip-percentage">
              {segments[hoveredSegment].percentage.toFixed(1)}%
            </div>
          </div>
        )}
      </div>
    );
  };
  
  // Helper function to lighten color
  const lightenColor = (color, percent) => {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, (num >> 16) + amt);
    // eslint-disable-next-line no-mixed-operators
    const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
    const B = Math.min(255, (num & 0x0000FF) + amt);
    return "#" + (0x1000000 + (R * 0x10000) + (G * 0x100) + B).toString(16).slice(1);
  };
  
export default DonutChart;