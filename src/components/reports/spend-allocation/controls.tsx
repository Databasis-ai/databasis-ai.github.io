import React from 'react';
import type { XYChartTheme } from '@visx/xychart';
import { lightTheme } from '@visx/xychart';
import type { AnimationTrajectory } from '@visx/react-spring/lib/types';

import type { curveStep, curveCardinal } from '@visx/curve';
import { curveLinear } from '@visx/curve';
import getAnimatedOrUnanimatedComponents from './get-animated-or-unanimated-components';
const dateScaleConfig = { type: 'band', paddingInner: 0.3 } as const;
const temperatureScaleConfig = { type: 'linear' } as const;
const getDate = (d: CityTemperature) => d.date;
const getSfTemperature = (d: CityTemperature) => Number(d['Income']);
const getNegativeSfTemperature = (d: CityTemperature) => -getSfTemperature(d);
const getNyTemperature = (d: CityTemperature) => Number(d['Mortgage']);
const getGoogleTemperature = (d: CityTemperature) => Number(d['Home Value']);
type Accessor = (d: CityTemperature) => number | string;

const cityTemperature = [
	{
					"date": "2011-10-01",
					"Mortgage": "250000",
					"Income": "62.7",
					"Home Value": "350000"
	},
	{
					"date": "2011-10-02",
					"Mortgage": "245000",
					"Income": "245000",
					"Home Value": "355000"
	},
	{
					"date": "2011-10-03",
					"Mortgage": "240000",
					"Income": "59.1",
					"Home Value": "359000"
	},
	{
					"date": "2011-10-04",
					"Mortgage": "235000",
					"Income": "58.8",
					"Home Value": "363000"
	},
	{
					"date": "2011-10-05",
					"Mortgage": "230000",
					"Income": "58.7",
					"Home Value": "370000"
	},
	{
					"date": "2011-10-06",
					"Mortgage": "230000",
					"Income": "57.0",
					"Home Value": "356000"
	},
	{
					"date": "2011-10-07",
					"Mortgage": "225000",
					"Income": "56.7",
					"Home Value": "355000"
	},
	{
					"date": "2011-10-08",
					"Mortgage": "225000",
					"Income": "56.8",
					"Home Value": "374000"
	},
	{
					"date": "2011-10-09",
					"Mortgage": "200000",
					"Income": "56.7",
					"Home Value": "334000"
	},
	{
					"date": "2011-10-10",
					"Mortgage": "220000",
					"Income": "60.1",
					"Home Value": "355000"
	},
	{
					"date": "2011-10-11",
					"Mortgage": "215000",
					"Income": "61.1",
					"Home Value": "380000"
	},
	{
					"date": "2011-10-12",
					"Mortgage": "210000",
					"Income": "61.5",
					"Home Value": "366000"
	},
	{
					"date": "2011-10-13",
					"Mortgage": "205000",
					"Income": "64.3",
					"Home Value": "345000"
	},
	{
					"date": "2011-10-14",
					"Mortgage": "200000",
					"Income": "67.1",
					"Home Value": "367000"
	},
	{
					"date": "2011-10-15",
					"Mortgage": "200000",
					"Income": "200000",
					"Home Value": "345000"
	},
	{
					"date": "2011-10-16",
					"Mortgage": "200000",
					"Income": "61.6",
					"Home Value": "345000"
	},
	{
					"date": "2011-10-17",
					"Mortgage": "200000",
					"Income": "61.1",
					"Home Value": "367000"
	},
	{
					"date": "2011-10-18",
					"Mortgage": "200000",
					"Income": "59.2",
					"Home Value": "375000"
	}
], data = cityTemperature;

interface CityTemperature {
	date: string;
	'Mortgage': string;
	'Income': string;
	'Home Value': string;
}
interface Accessors {
	'Income': Accessor;
	'Mortgage': Accessor;
	'Home Value': Accessor;
}

type SimpleScaleConfig = { type: 'band' | 'linear'; paddingInner?: number };

type ProvidedProps = {
	accessors: {
		x: Accessors;
		y: Accessors;
		date: Accessor;
	};
	animationTrajectory?: AnimationTrajectory;
	annotationDatum?: CityTemperature;
	annotationType?: 'line' | 'circle';
	config: {
		x: SimpleScaleConfig;
		y: SimpleScaleConfig;
	};
	curve: typeof curveLinear | typeof curveCardinal | typeof curveStep;
	data: any;
	renderAreaStack: boolean;
	renderBarGroup: boolean;
	renderBarSeries: boolean;
	renderBarStack: boolean;
	renderGlyphSeries: boolean;
	enableTooltipGlyph: boolean;
	renderHorizontally: boolean;
	sharedTooltip: boolean;
	showGridColumns: boolean;
	showGridRows: boolean;
	numTicks: number;
	showHorizontalCrosshair: boolean;
	showTooltip: boolean;
	showVerticalCrosshair: boolean;
	snapTooltipToDatumX: boolean;
	snapTooltipToDatumY: boolean;
	theme: XYChartTheme;
	xAxisOrientation: 'top' | 'bottom';
	yAxisOrientation: 'left' | 'right';
} & ReturnType<typeof getAnimatedOrUnanimatedComponents>;

type ControlsProps = {
	children: (props: ProvidedProps) => React.ReactNode;
};

export default function ExampleControls({ children }: ControlsProps) {
	const annotationDataIndex = 13;
	// for series that support it, return a colorAccessor which returns a custom color if the datum is selected
	const accessors = {
		x: {
			'Income': false
				? false
					? getNegativeSfTemperature
					: getSfTemperature
				: getDate,
			'Mortgage': false ? getNyTemperature : getDate,
			'Home Value': false ? getGoogleTemperature : getDate,
		},
		y: {
			'Income': false
				? getDate
				: false
					? getNegativeSfTemperature
					: getSfTemperature,
			'Mortgage': false ? getDate : getNyTemperature,
			'Home Value': false ? getDate : getGoogleTemperature,
		},
		date: getDate,
	};

	const config = {
		x: dateScaleConfig,
		y: temperatureScaleConfig,
	}

	return (
		<>
			{children({
				accessors,
				animationTrajectory: 'center',
				annotationDatum: data[annotationDataIndex],
				annotationType: 'circle',
				config,
				curve: curveLinear,
				data,
				numTicks: 4,
				renderBarGroup: false,
				renderBarSeries: false,
				renderBarStack: false,
				renderGlyphSeries: false,
				enableTooltipGlyph: true,
				renderHorizontally: false,
				renderAreaStack: true,
				sharedTooltip: true,
				showGridColumns: false,
				showGridRows: false,
				showHorizontalCrosshair: false,
				showTooltip: true,
				showVerticalCrosshair: true,
				snapTooltipToDatumX: true,
				snapTooltipToDatumY: true,
				theme: lightTheme,
				xAxisOrientation: 'bottom',
				yAxisOrientation: 'left',
				...getAnimatedOrUnanimatedComponents(true),
			})}
		</>
	);
}
