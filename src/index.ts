import App from "./app"

try {
    App()
} catch (err: any) {
    console.error(err.message)
}