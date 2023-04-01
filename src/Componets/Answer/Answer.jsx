import React from "react";

const Answer = () => {
	return (
		<div >
			<div className="collapse">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content px-10">
				What is Props vs State ?
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content px-10">
					<p>props are used to pass data down from a parent component to its child components, while state is used to manage data within a component that can change over time and affect the rendering of the component.</p>
                    <p>
                    props cannot be changed by the child component, while state can be changed using setState method.
                    </p>
				</div>
			</div>
		</div>
	);
};

export default Answer;
