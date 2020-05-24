import styled from 'styled-components';
import palette from 'assets/theme/palette';

const color = {
  lightGrey: palette.lightGray,
  black: palette.black,
  white: palette.white,
};

const charts = {
  fontFamily: "'Source Code Pro', 'Roboto', sans-serif",
  fontWeight: 'bold',
  fontSize: '13px',
  series: {
    lineWidth: '4px',
  },
};

const tooltip = {
  width: '200px',
  boxShadow: `3px 3px 5px ${palette.chart.tooltip.shadow}`,
  fontSizeTitle: '11px',
};

export const ChartContainer = styled.div`
  /* TODO(@pnavarrc): This negative margin breaks the auto-size of the chart */
  @media (min-width: 996px) {
    margin-left: -3rem;
  }
`;

export const PositionRelative = styled.div`
  position: relative;
`;

export const Axis = styled.g`
  text {
    font-family: ${charts.fontFamily};
    font-weight: ${charts.fontWeight};
    font-size: ${charts.fontSize};
    fill: ${palette.chart.axis};
  }
  line {
    stroke: ${palette.chart.axis};
  }
`;

export const LineGrid = styled.g`
  line,
  path {
    fill: none;
    stroke: ${palette.chart.grid};
    stroke-opacity: 0.6;
    stroke-dasharray: 4, 3;
    stroke-width: 1px;
  }
`;

export const SeriesLine = styled.g`
  line,
  path {
    fill: none;
    stroke: ${props => (props.stroke ? props.stroke : palette.black)};
    stroke-width: ${charts.series.lineWidth};
    stroke-linecap: round;
  }
`;

export const SeriesDotted = styled(SeriesLine)`
  line,
  path {
    stroke-dasharray: 1, 6;
  }
`;

export const SeriesDashed = styled(SeriesLine)`
  line,
  path {
    stroke-dasharray: 1, 6;
    stroke-linecap: square;
  }
`;

export const SeriesArea = styled.g`
  path {
    fill: ${palette.chart.area};
    stroke: none;
  }
`;

export const CircleMarker = styled.circle`
  stroke: white;
  stroke-width: 2px;
`;

export const TextAnnotation = styled.g`
  rect {
    fill: ${color.white};
    fill-opacity: 1;
    stroke: none;
    rx: 3;
    ry: 3;
  }
  text {
    font-family: ${charts.fontFamily};
    font-weight: ${charts.fontWeight};
    font-size: ${charts.fontSize};
    fill: ${palette.chart.annotation};
    text-anchor: ${props => props.textAnchor || 'middle'};
    dominant-baseline: ${props => props.dominantBaseline || 'middle'};
  }
`;

export const RegionAnnotation = styled(TextAnnotation)<{ isActive: boolean }>`
  rect {
    fill: ${props => (props.isActive ? props.color : palette.white)};
    stroke: ${props => (props.isActive ? props.color : palette.lightGray)};
    stroke-width: 1px;
  }
  text {
    fill: ${props => (props.isActive ? palette.white : props.color)};
    text-anchor: end;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, calc(-100% - 15px));
  width: ${tooltip.width};
  padding: 12px;
  border-radius: 3px;
  font-family: ${charts.fontFamily};
  font-weight: ${charts.fontWeight};
  font-size: ${charts.fontSize};
  line-height: 1.4;
  color: ${palette.chart.tooltip.text};
  background-color: ${palette.chart.tooltip.background};
  box-shadow: 2px 2px 6px ${palette.chart.tooltip.shadow};
`;

export const TooltipTitle = styled.div`
  font-size: ${tooltip.fontSizeTitle};
`;

export const TooltipBody = styled.div`
  font-size: 11px;
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  justify-content: center;
  > * {
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const LegendItem = styled.div`
  flex: 0 1 auto;
  align-items: center;
  > * {
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const LegendLabel = styled.span`
  font-family: ${charts.fontFamily};
  font-size: 11px;
  font-weight: bold;
  color: ${palette.chart.axis};
`;
