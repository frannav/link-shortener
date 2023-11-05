const request = require("supertest");
const { app, server } = require("./server");

describe("GET /check", () => {
	afterAll(() => {
		server.close();
	});

	it("Should return OK", async () => {
		const res = await request(app)
			.get("/check")
			.expect("Content-Type", /json/)
			.expect(200);
    
		expect(res.body.status).toEqual("OK");
	});
});