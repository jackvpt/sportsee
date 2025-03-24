import "./AverageDurationToolTip.scss"
import PropTypes from 'prop-types'

/**
 * Render a tooltip for Chart Average Duration
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
const AverageDurationToolTip=({ active, payload }) =>{
	if (active && payload && payload.length) {
		return (
			<div className="averageDuration__tooltip">
				<p>{payload[0].value + ' min'}</p>
			</div>
		)
	}
	return null
}

AverageDurationToolTip.propTypes = {
	/**
	 * Whether or not the tooltip is active
	 */
	active: PropTypes.bool,
	/**
	 * The payload of the tooltip
	 */
	payload: PropTypes.arrayOf(PropTypes.object),
}

export default AverageDurationToolTip