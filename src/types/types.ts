export interface TimerProps {
	id: number
	title: string
	time: Time
	color: string
}
export interface Time {
	seconds: number
	minutes: number
	hours: number
	id?: number
}
export interface TimerI {
	id: number
	title: string
	time: Time
	color: string
}
export interface PayloadType {
	type: string
	payload: Time
}
