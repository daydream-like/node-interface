'use strict';
let midres = async (ctx, next) => {
	try {
		await next()
	} catch (e) {
		let status = e.status || 500;
		let message = e.message || '服务器错误';
		ctx.body = message;
		ctx.status = status;
		throw e;

	}
}
module.exports = midres;