import React from "react";

const Answer = () => {
	return (
		<div>
			<div className="collapse">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content px-10">
					What is Props vs State ?
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content px-10">
					<p>
						props are used to pass data down from a parent component to its
						child components, while state is used to manage data within a
						component that can change over time and affect the rendering of the
						component.
					</p>
					<p>
						props cannot be changed by the child component, while state can be
						changed using setState method.
					</p>
				</div>
			</div>
			<div className="collapse">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content px-10">
					How does useState work?
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content px-10">
					<p>
						Use state is rract their is two value what is initial value another
						is a function of state whch is update state
					</p>
					<p>
						when change state than the state value changes, React will
						automatically re-render the component with the new state value.
					</p>
				</div>
			</div>
			<div className="collapse">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content px-10">
					Purpose of useEffect other than fetching data ?
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content px-10">
					<p>
						Fething data from api is common case of useeffect their are saveral
						of work is useEffect
					</p>
					<p>
						Dom Manupolation: use effect can be use dom manupolation like event
						added listener and remove.
					</p>
					<p>
						Animations: useEffect can be used to trigger animations or
						transitions in response to changes in the state of the component.
					</p>
					<p>
						Timers and intervals: useEffect can be used to set timers or
						intervals that execute a function after a specific time has elapsed
					</p>
					<p>
						Subscription management: useEffect can be used to manage
						subscriptions to external services or event streams.
					</p>
					<p>
						React lifecycle methods: useEffect can be used to emulate the
						behavior of React class component lifecycle methods, such as
						componentDidMount, componentDidUpdate, and componentWillUnmount
					</p>
				</div>
			</div>
			<div className="collapse">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content px-10">
					How Does React work?
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content px-10">
					<p>
						React works by creating reusable components, rendering them to a
						lightweight Virtual DOM, and efficiently updating the real DOM using
						a diffing algorithm. React provides a powerful mechanism for
						managing state and lifecycle methods that allow you to control the
						behavior of your components.
					</p>
					
				</div>
			</div>
		</div>
	);
};

export default Answer;
