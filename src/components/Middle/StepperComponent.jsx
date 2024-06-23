import styles from "../../scss/stepper.module.scss"

const StepperComponent = () => {
	return (
		<section className="w-[800px]">
			<div className={styles.timeline}>
				<div className="relative">
					<div className={styles.dot}></div>
					<div className="pl-10">
						<span className={`${styles.timelineDate}`}>13 November 2021</span>
						<h3 className={styles.timelineTitle}>Event 1</h3>
						<p className="text-secondary">This is my education timeline from my history</p>
					</div>
				</div>
				<div className="relative">
					<div className={styles.dot}></div>
					<div className="pl-10">
						<span className={`${styles.timelineDate}`}>13 November 2021</span>
						<h3 className={styles.timelineTitle}>Event 1</h3>
						<p className="text-secondary">This is my education timeline from my history</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default StepperComponent
