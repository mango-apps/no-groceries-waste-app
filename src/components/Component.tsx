type componetProps = {
	text: string
}

export function Component(props: componetProps) {
	return <h1>{props.text}</h1>
}
