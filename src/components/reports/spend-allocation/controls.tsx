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
const getSfTemperature = (d: CityTemperature) => Number(d['Facebook']);
const getNegativeSfTemperature = (d: CityTemperature) => -getSfTemperature(d);
const getNyTemperature = (d: CityTemperature) => Number(d['Instagram']);
const getGoogleTemperature = (d: CityTemperature) => Number(d.Google);
type Accessor = (d: CityTemperature) => number | string;
const cityTemperature = [
	{
					"date": "2011-10-01",
					"Instagram": "63.4",
					"Facebook": "62.7",
					"Google": "72.2"
	},
	{
					"date": "2011-10-02",
					"Instagram": "58.0",
					"Facebook": "59.9",
					"Google": "67.7"
	},
	{
					"date": "2011-10-03",
					"Instagram": "53.3",
					"Facebook": "59.1",
					"Google": "69.4"
	},
	{
					"date": "2011-10-04",
					"Instagram": "55.7",
					"Facebook": "58.8",
					"Google": "68.0"
	},
	{
					"date": "2011-10-05",
					"Instagram": "64.2",
					"Facebook": "58.7",
					"Google": "72.4"
	},
	{
					"date": "2011-10-06",
					"Instagram": "58.8",
					"Facebook": "57.0",
					"Google": "77.0"
	},
	{
					"date": "2011-10-07",
					"Instagram": "57.9",
					"Facebook": "56.7",
					"Google": "82.3"
	},
	{
					"date": "2011-10-08",
					"Instagram": "61.8",
					"Facebook": "56.8",
					"Google": "78.9"
	},
	{
					"date": "2011-10-09",
					"Instagram": "69.3",
					"Facebook": "56.7",
					"Google": "68.8"
	},
	{
					"date": "2011-10-10",
					"Instagram": "71.2",
					"Facebook": "60.1",
					"Google": "68.7"
	},
	{
					"date": "2011-10-11",
					"Instagram": "68.7",
					"Facebook": "61.1",
					"Google": "70.3"
	},
	{
					"date": "2011-10-12",
					"Instagram": "61.8",
					"Facebook": "61.5",
					"Google": "75.3"
	},
	{
					"date": "2011-10-13",
					"Instagram": "63.0",
					"Facebook": "64.3",
					"Google": "76.6"
	},
	{
					"date": "2011-10-14",
					"Instagram": "66.9",
					"Facebook": "67.1",
					"Google": "66.6"
	},
	{
					"date": "2011-10-15",
					"Instagram": "61.7",
					"Facebook": "64.6",
					"Google": "68.0"
	},
	{
					"date": "2011-10-16",
					"Instagram": "61.8",
					"Facebook": "61.6",
					"Google": "70.6"
	},
	{
					"date": "2011-10-17",
					"Instagram": "62.8",
					"Facebook": "61.1",
					"Google": "71.1"
	},
	{
					"date": "2011-10-18",
					"Instagram": "60.8",
					"Facebook": "59.2",
					"Google": "70.0"
	},
	{
					"date": "2011-10-19",
					"Instagram": "62.1",
					"Facebook": "58.9",
					"Google": "61.6"
	},
	{
					"date": "2011-10-20",
					"Instagram": "65.1",
					"Facebook": "57.2",
					"Google": "57.4"
	},
	{
					"date": "2011-10-21",
					"Instagram": "55.6",
					"Facebook": "56.4",
					"Google": "64.3"
	},
	{
					"date": "2011-10-22",
					"Instagram": "54.4",
					"Facebook": "60.7",
					"Google": "72.4"
	},
	{
					"date": "2011-10-23",
					"Instagram": "54.4",
					"Facebook": "65.1",
					"Google": "72.4"
	},
	{
					"date": "2011-10-24",
					"Instagram": "54.8",
					"Facebook": "60.9",
					"Google": "72.5"
	},
	{
					"date": "2011-10-25",
					"Instagram": "57.9",
					"Facebook": "56.1",
					"Google": "72.7"
	},
	{
					"date": "2011-10-26",
					"Instagram": "54.6",
					"Facebook": "54.6",
					"Google": "73.4"
	},
	{
					"date": "2011-10-27",
					"Instagram": "54.4",
					"Facebook": "56.1",
					"Google": "70.7"
	},
	{
					"date": "2011-10-28",
					"Instagram": "42.5",
					"Facebook": "58.1",
					"Google": "56.8"
	},
	{
					"date": "2011-10-29",
					"Instagram": "40.9",
					"Facebook": "57.5",
					"Google": "51.0"
	},
	{
					"date": "2011-10-30",
					"Instagram": "38.6",
					"Facebook": "57.7",
					"Google": "54.9"
	},
	{
					"date": "2011-10-31",
					"Instagram": "44.2",
					"Facebook": "55.1",
					"Google": "58.8"
	},
	{
					"date": "2011-11-01",
					"Instagram": "49.6",
					"Facebook": "57.9",
					"Google": "62.6"
	},
	{
					"date": "2011-11-02",
					"Instagram": "47.2",
					"Facebook": "64.6",
					"Google": "71.0"
	},
	{
					"date": "2011-11-03",
					"Instagram": "50.1",
					"Facebook": "56.2",
					"Google": "58.4"
	},
	{
					"date": "2011-11-04",
					"Instagram": "50.1",
					"Facebook": "50.5",
					"Google": "45.1"
	},
	{
					"date": "2011-11-05",
					"Instagram": "43.5",
					"Facebook": "51.3",
					"Google": "52.2"
	},
	{
					"date": "2011-11-06",
					"Instagram": "43.8",
					"Facebook": "52.6",
					"Google": "73.0"
	},
	{
					"date": "2011-11-07",
					"Instagram": "48.9",
					"Facebook": "51.4",
					"Google": "75.4"
	},
	{
					"date": "2011-11-08",
					"Instagram": "55.5",
					"Facebook": "50.6",
					"Google": "72.1"
	},
	{
					"date": "2011-11-09",
					"Instagram": "53.7",
					"Facebook": "54.6",
					"Google": "56.6"
	},
	{
					"date": "2011-11-10",
					"Instagram": "57.7",
					"Facebook": "55.6",
					"Google": "55.4"
	},
	{
					"date": "2011-11-11",
					"Instagram": "48.5",
					"Facebook": "53.9",
					"Google": "46.7"
	},
	{
					"date": "2011-11-12",
					"Instagram": "46.8",
					"Facebook": "54.0",
					"Google": "62.0"
	},
	{
					"date": "2011-11-13",
					"Instagram": "51.1",
					"Facebook": "53.8",
					"Google": "71.6"
	},
	{
					"date": "2011-11-14",
					"Instagram": "56.8",
					"Facebook": "53.5",
					"Google": "75.5"
	},
	{
					"date": "2011-11-15",
					"Instagram": "59.7",
					"Facebook": "53.4",
					"Google": "72.1"
	},
	{
					"date": "2011-11-16",
					"Instagram": "56.5",
					"Facebook": "52.2",
					"Google": "65.7"
	},
	{
					"date": "2011-11-17",
					"Instagram": "49.6",
					"Facebook": "52.7",
					"Google": "56.8"
	},
	{
					"date": "2011-11-18",
					"Instagram": "41.5",
					"Facebook": "53.1",
					"Google": "49.9"
	},
	{
					"date": "2011-11-19",
					"Instagram": "44.3",
					"Facebook": "49.0",
					"Google": "71.7"
	},
	{
					"date": "2011-11-20",
					"Instagram": "54.0",
					"Facebook": "50.4",
					"Google": "77.7"
	},
	{
					"date": "2011-11-21",
					"Instagram": "54.1",
					"Facebook": "51.1",
					"Google": "76.4"
	},
	{
					"date": "2011-11-22",
					"Instagram": "49.4",
					"Facebook": "52.3",
					"Google": "68.8"
	},
	{
					"date": "2011-11-23",
					"Instagram": "50.0",
					"Facebook": "54.6",
					"Google": "57.0"
	},
	{
					"date": "2011-11-24",
					"Instagram": "44.0",
					"Facebook": "55.1",
					"Google": "55.5"
	},
	{
					"date": "2011-11-25",
					"Instagram": "50.3",
					"Facebook": "51.5",
					"Google": "61.6"
	},
	{
					"date": "2011-11-26",
					"Instagram": "52.1",
					"Facebook": "53.6",
					"Google": "64.1"
	},
	{
					"date": "2011-11-27",
					"Instagram": "49.6",
					"Facebook": "52.3",
					"Google": "51.1"
	},
	{
					"date": "2011-11-28",
					"Instagram": "57.2",
					"Facebook": "51.0",
					"Google": "43.0"
	},
	{
					"date": "2011-11-29",
					"Instagram": "59.1",
					"Facebook": "49.5",
					"Google": "46.4"
	},
	{
					"date": "2011-11-30",
					"Instagram": "50.6",
					"Facebook": "49.8",
					"Google": "48.0"
	}
], data = cityTemperature;

interface CityTemperature {
	date: string;
	'Instagram': string;
	'Facebook': string;
	Google: string;
}
interface Accessors {
	'Facebook': Accessor;
	'Instagram': Accessor;
	Google: Accessor;
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
			'Facebook': false
				? false
					? getNegativeSfTemperature
					: getSfTemperature
				: getDate,
			'Instagram': false ? getNyTemperature : getDate,
			Google: false ? getGoogleTemperature : getDate,
		},
		y: {
			'Facebook': false
				? getDate
				: false
					? getNegativeSfTemperature
					: getSfTemperature,
			'Instagram': false ? getDate : getNyTemperature,
			Google: false ? getDate : getGoogleTemperature,
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
