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
					"Mortgage": "63.4",
					"Income": "62.7",
					"Home Value": "72.2"
	},
	{
					"date": "2011-10-02",
					"Mortgage": "58.0",
					"Income": "59.9",
					"Home Value": "67.7"
	},
	{
					"date": "2011-10-03",
					"Mortgage": "53.3",
					"Income": "59.1",
					"Home Value": "69.4"
	},
	{
					"date": "2011-10-04",
					"Mortgage": "55.7",
					"Income": "58.8",
					"Home Value": "68.0"
	},
	{
					"date": "2011-10-05",
					"Mortgage": "64.2",
					"Income": "58.7",
					"Home Value": "72.4"
	},
	{
					"date": "2011-10-06",
					"Mortgage": "58.8",
					"Income": "57.0",
					"Home Value": "77.0"
	},
	{
					"date": "2011-10-07",
					"Mortgage": "57.9",
					"Income": "56.7",
					"Home Value": "82.3"
	},
	{
					"date": "2011-10-08",
					"Mortgage": "61.8",
					"Income": "56.8",
					"Home Value": "78.9"
	},
	{
					"date": "2011-10-09",
					"Mortgage": "69.3",
					"Income": "56.7",
					"Home Value": "68.8"
	},
	{
					"date": "2011-10-10",
					"Mortgage": "71.2",
					"Income": "60.1",
					"Home Value": "68.7"
	},
	{
					"date": "2011-10-11",
					"Mortgage": "68.7",
					"Income": "61.1",
					"Home Value": "70.3"
	},
	{
					"date": "2011-10-12",
					"Mortgage": "61.8",
					"Income": "61.5",
					"Home Value": "75.3"
	},
	{
					"date": "2011-10-13",
					"Mortgage": "63.0",
					"Income": "64.3",
					"Home Value": "76.6"
	},
	{
					"date": "2011-10-14",
					"Mortgage": "66.9",
					"Income": "67.1",
					"Home Value": "66.6"
	},
	{
					"date": "2011-10-15",
					"Mortgage": "61.7",
					"Income": "64.6",
					"Home Value": "68.0"
	},
	{
					"date": "2011-10-16",
					"Mortgage": "61.8",
					"Income": "61.6",
					"Home Value": "70.6"
	},
	{
					"date": "2011-10-17",
					"Mortgage": "62.8",
					"Income": "61.1",
					"Home Value": "71.1"
	},
	{
					"date": "2011-10-18",
					"Mortgage": "60.8",
					"Income": "59.2",
					"Home Value": "70.0"
	},
	{
					"date": "2011-10-19",
					"Mortgage": "62.1",
					"Income": "58.9",
					"Home Value": "61.6"
	},
	{
					"date": "2011-10-20",
					"Mortgage": "65.1",
					"Income": "57.2",
					"Home Value": "57.4"
	},
	{
					"date": "2011-10-21",
					"Mortgage": "55.6",
					"Income": "56.4",
					"Home Value": "64.3"
	},
	{
					"date": "2011-10-22",
					"Mortgage": "54.4",
					"Income": "60.7",
					"Home Value": "72.4"
	},
	{
					"date": "2011-10-23",
					"Mortgage": "54.4",
					"Income": "65.1",
					"Home Value": "72.4"
	},
	{
					"date": "2011-10-24",
					"Mortgage": "54.8",
					"Income": "60.9",
					"Home Value": "72.5"
	},
	{
					"date": "2011-10-25",
					"Mortgage": "57.9",
					"Income": "56.1",
					"Home Value": "72.7"
	},
	{
					"date": "2011-10-26",
					"Mortgage": "54.6",
					"Income": "54.6",
					"Home Value": "73.4"
	},
	{
					"date": "2011-10-27",
					"Mortgage": "54.4",
					"Income": "56.1",
					"Home Value": "70.7"
	},
	{
					"date": "2011-10-28",
					"Mortgage": "42.5",
					"Income": "58.1",
					"Home Value": "56.8"
	},
	{
					"date": "2011-10-29",
					"Mortgage": "40.9",
					"Income": "57.5",
					"Home Value": "51.0"
	},
	{
					"date": "2011-10-30",
					"Mortgage": "38.6",
					"Income": "57.7",
					"Home Value": "54.9"
	},
	{
					"date": "2011-10-31",
					"Mortgage": "44.2",
					"Income": "55.1",
					"Home Value": "58.8"
	},
	{
					"date": "2011-11-01",
					"Mortgage": "49.6",
					"Income": "57.9",
					"Home Value": "62.6"
	},
	{
					"date": "2011-11-02",
					"Mortgage": "47.2",
					"Income": "64.6",
					"Home Value": "71.0"
	},
	{
					"date": "2011-11-03",
					"Mortgage": "50.1",
					"Income": "56.2",
					"Home Value": "58.4"
	},
	{
					"date": "2011-11-04",
					"Mortgage": "50.1",
					"Income": "50.5",
					"Home Value": "45.1"
	},
	{
					"date": "2011-11-05",
					"Mortgage": "43.5",
					"Income": "51.3",
					"Home Value": "52.2"
	},
	{
					"date": "2011-11-06",
					"Mortgage": "43.8",
					"Income": "52.6",
					"Home Value": "73.0"
	},
	{
					"date": "2011-11-07",
					"Mortgage": "48.9",
					"Income": "51.4",
					"Home Value": "75.4"
	},
	{
					"date": "2011-11-08",
					"Mortgage": "55.5",
					"Income": "50.6",
					"Home Value": "72.1"
	},
	{
					"date": "2011-11-09",
					"Mortgage": "53.7",
					"Income": "54.6",
					"Home Value": "56.6"
	},
	{
					"date": "2011-11-10",
					"Mortgage": "57.7",
					"Income": "55.6",
					"Home Value": "55.4"
	},
	{
					"date": "2011-11-11",
					"Mortgage": "48.5",
					"Income": "53.9",
					"Home Value": "46.7"
	},
	{
					"date": "2011-11-12",
					"Mortgage": "46.8",
					"Income": "54.0",
					"Home Value": "62.0"
	},
	{
					"date": "2011-11-13",
					"Mortgage": "51.1",
					"Income": "53.8",
					"Home Value": "71.6"
	},
	{
					"date": "2011-11-14",
					"Mortgage": "56.8",
					"Income": "53.5",
					"Home Value": "75.5"
	},
	{
					"date": "2011-11-15",
					"Mortgage": "59.7",
					"Income": "53.4",
					"Home Value": "72.1"
	},
	{
					"date": "2011-11-16",
					"Mortgage": "56.5",
					"Income": "52.2",
					"Home Value": "65.7"
	},
	{
					"date": "2011-11-17",
					"Mortgage": "49.6",
					"Income": "52.7",
					"Home Value": "56.8"
	},
	{
					"date": "2011-11-18",
					"Mortgage": "41.5",
					"Income": "53.1",
					"Home Value": "49.9"
	},
	{
					"date": "2011-11-19",
					"Mortgage": "44.3",
					"Income": "49.0",
					"Home Value": "71.7"
	},
	{
					"date": "2011-11-20",
					"Mortgage": "54.0",
					"Income": "50.4",
					"Home Value": "77.7"
	},
	{
					"date": "2011-11-21",
					"Mortgage": "54.1",
					"Income": "51.1",
					"Home Value": "76.4"
	},
	{
					"date": "2011-11-22",
					"Mortgage": "49.4",
					"Income": "52.3",
					"Home Value": "68.8"
	},
	{
					"date": "2011-11-23",
					"Mortgage": "50.0",
					"Income": "54.6",
					"Home Value": "57.0"
	},
	{
					"date": "2011-11-24",
					"Mortgage": "44.0",
					"Income": "55.1",
					"Home Value": "55.5"
	},
	{
					"date": "2011-11-25",
					"Mortgage": "50.3",
					"Income": "51.5",
					"Home Value": "61.6"
	},
	{
					"date": "2011-11-26",
					"Mortgage": "52.1",
					"Income": "53.6",
					"Home Value": "64.1"
	},
	{
					"date": "2011-11-27",
					"Mortgage": "49.6",
					"Income": "52.3",
					"Home Value": "51.1"
	},
	{
					"date": "2011-11-28",
					"Mortgage": "57.2",
					"Income": "51.0",
					"Home Value": "43.0"
	},
	{
					"date": "2011-11-29",
					"Mortgage": "59.1",
					"Income": "49.5",
					"Home Value": "46.4"
	},
	{
					"date": "2011-11-30",
					"Mortgage": "50.6",
					"Income": "49.8",
					"Home Value": "48.0"
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
