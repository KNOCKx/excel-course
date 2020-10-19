import {ExcelComponent} from "@core/ExcelComponent";

export class Table extends ExcelComponent {
    static className = 'excel__table'
    toHTML() {
        return `
            
            <div class="row">
                <div class="row-info"></div>
                <div class="row-data">
                    <div class="column">
                        a
                    </div>
                    <div class="column">
                        b
                    </div>
                    <div class="column">
                        c
                    </div>
                    <div class="column">
                        a
                    </div>
                    <div class="column">
                        b
                    </div>
                    <div class="column">
                        c
                    </div>
                    <div class="column">
                        a
                    </div>
                    <div class="column">
                        b
                    </div>
                    <div class="column">
                        c
                    </div>
                    <div class="column">
                        a
                    </div>
                    <div class="column">
                        b
                    </div>
                    <div class="column">
                        c
                    </div>
                    <div class="column">
                        a
                    </div>
                    <div class="column">
                        b
                    </div>
                    <div class="column">
                        c
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="row-info">
                    1
                </div>
                <div class="row-data">
                    <div class="cell selected" contenteditable>A1</div>
                    <div class="cell" contenteditable>B1</div>
                    <div class="cell" contenteditable>C1</div>
                </div>
            </div>
            <div class="row">
                <div class="row-info">
                    2
                </div>
                <div class="row-data">
                    <div class="cell">A2</div>
                    <div class="cell">B2</div>
                    <div class="cell">C2</div>
                </div>
            </div>
        `
    }
}