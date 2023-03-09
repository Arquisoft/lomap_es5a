const checkStatus: any = async (result:any, res:any) => {
	if (Number(res.status) === 500) {
		res.status(500).json({
		  msg: `Server error. Please, try again later.`,
		}); 
	}
	
	if (!result) { 
		res.status(404).json({
		  msg: "There are no tracks with this id.",
		});
	}

	res.status(200).json(result);
};

export { checkStatus };