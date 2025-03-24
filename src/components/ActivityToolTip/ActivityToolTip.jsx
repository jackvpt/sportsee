import PropTypes from 'prop-types'
import "./ActivityToolTip.scss"

/**
 * Render a tooltip for Chart Activity
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function ActivityToolTip({ active, payload }) {
	if (active && payload && payload.length) {
		return (
			<div className="tooltip">
				<p>{payload[0].value + 'kg'}</p>
				<p>{payload[1].value + 'Kcal'}</p>
			</div>
		)
	}
	return null
}

ActivityToolTip.propTypes = {
	/**
	 * Whether or not the tooltip is active
	 */
	active: PropTypes.bool,
	/**
	 * The values of the tooltip
	 */
	payload: PropTypes.arrayOf(PropTypes.object),
}

export default ActivityToolTip