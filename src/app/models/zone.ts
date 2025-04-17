export class Zone {

    constructor(
        public timezone: string,
        public country: string,
        public state: string | null,
        public city: string
    ) {}
}
