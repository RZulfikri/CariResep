import { Metrics } from "../Themes";

export function Scale(number) {
    return (Metrics.screenWidth / Metrics.designWidth) * number
}