import App from "./src/app"

try {
    App()
} catch (err: any) {
    console.error(err.message)
}