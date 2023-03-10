export interface Configure {
    token: string;
    db?: string;
    global?: boolean | true;
}

    export const config: Configure = {
        token: "YOUR_TOKEN",
        global: true,
}