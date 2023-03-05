import React, { useMemo, useCallback } from 'react';
import { Line, Bar, LinePath } from '@visx/shape';
import { curveBasis } from '@visx/curve';
import { GridColumns } from '@visx/grid';

import { scaleTime, scaleLinear, TimeDomain } from '@visx/scale';
import { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';
import { localPoint } from '@visx/event';
import { LinearGradient } from '@visx/gradient';
import { max, extent, bisector } from 'd3-array';
import { timeFormat } from 'd3-time-format';
import type { EventType } from '@visx/event/lib/types';

export const background = '#e6e6e6';
export const background2 = '#e6e6e6';
export const accentColor = 'rgb(0,180,5)'
export const accentColorDark = '#542e8f';
const tooltipStyles = {
  ...defaultStyles,
  boxShadow: '',
  background: 'rgba(1, 2,3,1)',
  color: '#fff',
};

// util
const formatDate = timeFormat("%b %d, '%y");

// accessors
const getDate = (d: { time: string | number | Date; }) => new Date(d.time);
const getStockValue = (d: { price: any; }) => d.price;
const bisectDate = bisector((d: any) => new Date(d.time)).left;
let quotes = new Array(50).fill(undefined)
				quotes = quotes.map((q, index) => ({ price: Math.floor(Math.random() *100), time: index }));
export default withTooltip(
  ({
    width,
    height,
    margin = { top: 0, right: 0, bottom: 0, left: 0 },
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipTop = 0,
    tooltipLeft = 0,
  }: any) => {

    //gql makes it read only so we have to duplicate
    quotes = [...quotes].map(q => ({ ...q, price: parseFloat(parseFloat(q.price).toFixed(2)) }));

    if (width < 50) return null;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const dateScale = useMemo(
      () =>
        scaleTime({
          range: [margin.left, innerWidth + margin.left],
          domain: extent(quotes, getDate) as TimeDomain,
        }),
      [innerWidth, margin.left],
    );

    const stockValueScale = useMemo(
      () =>
        scaleLinear({
          range: [innerHeight + margin.top, margin.top],
          domain: [0, (max(quotes, getStockValue )  || 0) as number + innerHeight / 35],
          nice: true,
        }),
      [innerHeight, margin.top],
    );

    const handleTooltip = useCallback(
      (event: Element | EventType) => {
        const { x } = localPoint(event) || { x: 0 };
        const x0 = dateScale.invert(x);
        const index = bisectDate(quotes, x0, 1);
        const d0 = quotes[index - 1];
        const d1 = quotes[index];
        let d = d0;
        if (d1 && getDate(d1)) {
          d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
        }
        showTooltip({
          tooltipData: d,
          tooltipLeft: x,
          tooltipTop: stockValueScale(getStockValue(d)),
        });
      },
      [dateScale, showTooltip, stockValueScale],
    );

    return (
      <div >
        <svg width={width} height={height}>
          <LinearGradient id="area-gradient" from={accentColor} to={accentColor} />
          <GridColumns
            top={margin.top}
            scale={dateScale}
            height={innerHeight}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0.3}
            pointerEvents="none"
          />
          <LinePath
            data={quotes}
            curve={curveBasis}
            x={d => dateScale(getDate(d)) ?? 0}
            y={d => stockValueScale(getStockValue(d)) ?? 0}
            strokeWidth={3}
            stroke="url(#area-gradient)"
          />
          <Bar
            x={margin.left}
            y={margin.top}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: margin.top }}
                to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                stroke={accentColorDark}
                strokeWidth={2}
                pointerEvents="none"
                strokeDasharray="5,2"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop + 1}
                r={4}
                fill="black"
                fillOpacity={0.1}
                stroke="black"
                strokeOpacity={0.1}
                strokeWidth={2}
                pointerEvents="none"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill={accentColorDark}
                stroke="blue"
                strokeWidth={2}
                pointerEvents="none"
              />
            </g>
          )}
        </svg>
        {tooltipData && (
          <div>
            <TooltipWithBounds
              style={tooltipStyles}
              key={Math.random()}
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
            >
              {`$${getStockValue(tooltipData)}`}
            </TooltipWithBounds>
            <Tooltip
              top={innerHeight + margin.top - 14}
              left={tooltipLeft}
              style={{
                ...defaultStyles,
                minWidth: 100,
                textAlign: 'center',
                transform: 'translateX(-50%)',
                boxShadow: '',
                background: 'rgba(1, 2,3,0)',
                color: 'blue',
                width: 130,
              }}
            >
              {formatDate(getDate(tooltipData))}
            </Tooltip>
          </div>
        )}
      </div>
    );
  },
);