
export default function Modules() {
    return (
        <div>
            {/* Implement Collapse All button, View Progress button, Publish all drop down, +Module button */}
            <button>
                Collapse All
            </button> &nbsp;
            <button>
                View Progress
            </button> &nbsp;
            <select id="wd-select-publish">
                <option value="ALL">Publish All</option>
                <option value="ONE">Publish One</option>
            </select> &nbsp;
            <button>
                + Module
            </button> &nbsp;
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className='wd-title'>Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}