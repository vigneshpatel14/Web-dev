try {
    try {
        let a = b; // Will throw ReferenceError
    } catch (error) {
        console.log(error.message); // Logs: b is not defined

        // Throw a new error with a custom message
        throw new Error("zero division");
    } finally {
        console.log("This is finally"); // Logs: This is finally
    }
} catch (error) {
    console.log("Caught error: " + error.message); // Logs: Caught error: zero division
}
