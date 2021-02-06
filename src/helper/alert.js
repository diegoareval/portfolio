import Swal from "sweetalert2";
export const ALERT_TYPES = {
	SUCCESS: "success",
	ERROR: "error",
	WARNING: "warning",
	INFO: "info",
	QUESTION: "question",
};

export const POSITIONS_ALERT = {
	TOP: "top",
	TOP_START: "top-start",
	TOP_END: "top-end",
	TOP_LEFT: "top-left",
	TOP_RIGHT: "top-right",
	CENTER: "center",
	CENTER_START: "center-start",
	CENTER_END: "center-end",
	CENTER_LEFT: "center-left",
	CENTER_RIGHT: "center-right",
	BOTTOM: "bottom",
	BOTTOM_START: "bottom-start",
	BOTTOM_END: "bottom-end",
	BOTTOM_LEFT: "bottom-left",
	BOTTOM_RIGTH: "bottom-right",
};

export const smallAlert = (
	type = ALERT_TYPES.SUCCESS,
	title = "",
	position = POSITIONS_ALERT.BOTTOM_END,
	time = 3000
) => {
	Swal.fire({
		type: `${type}`,
		title: `${title}`,
		toast: true,
		position: `${position}`,
		timer: time,
		timerProgressBar: true,
		onOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		  }
	});
};