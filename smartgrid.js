module.exports = {
	columns: 12,
	offset: "24px",
	container: {
		maxWidth: "1360px",
		fields: "32px" // Внимание! fields обязан быть >= offset / 2
	},
	breakPoints: {
		xl: {
			width: "1280px",
		},
		lg: {
			width: "1024px",
		},
		md: {
			width: "768px"
		},
		xs: {
			width: "576px",
			fields: "16px"
		},
	}
}