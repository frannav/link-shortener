import { app, server } from "./server";

describe("check endpoint", () => {
	afterAll(() => {
		server.close();
	});

	it("should return OK", () => {
		const mockRequest = { method: "GET", url: "/check" };
		const mockResponse = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		app(mockRequest, mockResponse);

		expect(mockResponse.status).toHaveBeenCalledWith(200);
		expect(mockResponse.json).toHaveBeenCalledWith({ status: "OK" });
	});
});
