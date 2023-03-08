import React from 'react';
import type { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';

import Controls from './controls';
import CustomChartBackground from './custom-chart-background';

export type XYChartProps = {
  width: number;
  height: number;
};

type City = 'Income' | 'Mortgage' | 'Home Value';

export default function Example({ height }: XYChartProps) {
  return (
    <Controls>
      {({
        accessors,
        animationTrajectory,
        annotationDataKey,
        annotationDatum,
        annotationType,
        config,
        curve,
        data,
        numTicks,
        renderAreaStack,
        enableTooltipGlyph,
        renderTooltipGlyph,
        renderHorizontally,
        sharedTooltip,
        showGridColumns,
        showGridRows,
        showHorizontalCrosshair,
        showTooltip,
        showVerticalCrosshair,
        snapTooltipToDatumX,
        snapTooltipToDatumY,
        theme,
        xAxisOrientation,
        yAxisOrientation,
        Annotation,
        AreaSeries,
        AreaStack,
        Axis,
        Grid,
        AnnotationCircleSubject,
        AnnotationConnector,
        AnnotationLabel,
        AnnotationLineSubject,
        Tooltip,
        XYChart,
      }: any) => (
        <XYChart
          theme={theme}
          xScale={config.x}
          yScale={config.y}
          height={Math.min(400, height)}
        >
          <CustomChartBackground />
          <Grid
            key={`grid-${animationTrajectory}`}
            rows={showGridRows}
            columns={showGridColumns}
            animationTrajectory={animationTrajectory}
            numTicks={numTicks}
          />
          {renderAreaStack && (
            <AreaStack curve={curve} >
              <AreaSeries
                dataKey='Home Value'
                data={data}
                xAccessor={accessors.x['Home Value']}
                yAccessor={accessors.y['Home Value']}
                fillOpacity={0.4}
              />
              <AreaSeries
                dataKey="Mortgage"
                data={data}
                xAccessor={accessors.x['Mortgage']}
                yAccessor={accessors.y['Mortgage']}
                fillOpacity={0.4}
              />
              <AreaSeries
                dataKey="Income"
                data={data}
                xAccessor={accessors.x['Income']}
                yAccessor={accessors.y['Income']}
                fillOpacity={0.4}
              />
            </AreaStack>
          )}

          <Axis
            key={`time-axis-${animationTrajectory}-${renderHorizontally}`}
            orientation={renderHorizontally ? yAxisOrientation : xAxisOrientation}
            numTicks={numTicks}
            animationTrajectory={animationTrajectory}
          />
          <Axis
            key={`temp-axis-${animationTrajectory}-${renderHorizontally}`}
            label={
              'Channel [Income, Mortgage, Home Value]'
            }
            orientation={renderHorizontally ? xAxisOrientation : yAxisOrientation}
            numTicks={numTicks}
            animationTrajectory={animationTrajectory}
          />
          {annotationDataKey && annotationDatum && (
            <Annotation
              dataKey={annotationDataKey}
              datum={annotationDatum}
              canEditSubject={false}
            >
              <AnnotationConnector />
              {annotationType === 'circle' ? (
                <AnnotationCircleSubject />
              ) : (
                <AnnotationLineSubject />
              )}
              <AnnotationLabel
                title={annotationDataKey}
                subtitle={`${annotationDatum.date}, ${annotationDatum[annotationDataKey]}°F`}
                width={135}
                backgroundProps={{
                  stroke: theme.gridStyles.stroke,
                  strokeOpacity: 0.5,
                  fillOpacity: 0.8,
                }}
              />
            </Annotation>
          )}
          {showTooltip && (
            <Tooltip<CityTemperature>
              showHorizontalCrosshair={showHorizontalCrosshair}
              showVerticalCrosshair={showVerticalCrosshair}
              snapTooltipToDatumX={snapTooltipToDatumX}
              snapTooltipToDatumY={snapTooltipToDatumY}
              showDatumGlyph={(snapTooltipToDatumX || snapTooltipToDatumY)}
              showSeriesGlyphs={sharedTooltip}
              renderGlyph={enableTooltipGlyph ? renderTooltipGlyph : undefined}
              renderTooltip={({ tooltipData, colorScale }: any) => (
                <>
                  {(tooltipData?.nearestDatum?.datum &&
                    accessors.date(tooltipData?.nearestDatum?.datum)) ||
                    'No date'}
                  {(
                    (sharedTooltip
                      ? Object.keys(tooltipData?.datumByKey ?? {})
                      : [tooltipData?.nearestDatum?.key]
                    ).filter((city) => city) as City[]
                  ).map((city) => {
                    const temperature =
                      tooltipData?.nearestDatum?.datum &&
                      accessors[renderHorizontally ? 'x' : 'y'][city](
                        tooltipData?.nearestDatum?.datum
                      );

                    return (
                      <div key={city}>
                        <em
                          style={{
                            color: colorScale?.(city),
                            textDecoration:
                              tooltipData?.nearestDatum?.key === city ? 'underline' : undefined,
                          }}
                        >
                          {city}
                        </em>{' '}
                        {temperature == null || Number.isNaN(temperature)
                          ? '–'
                          : `${temperature}° F`}
                      </div>
                    );
                  })}
                </>
              )}
            />
          )}
        </XYChart>
      )}
    </Controls>
  );
}