import { NbDialogRef } from "@nebular/theme";

export class DialogCard {

    constructor(
        public dailogRef: NbDialogRef<any>,
    ) { }

    close(status: any = false) {
        this.dailogRef.close(status);
    }

}