import classes from "./Navbar.module.css";

function Navbar({search, setSearch, page, setPage, pageLimit}){


    function searchHandler(e){
        setSearch(e.target.value)
    }

    

    return <div className={classes["container"]} >
        <nav className="navbar">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={searchHandler} />
            </form>

            <div className={classes["pagination-container"]} >
                    <ul className="pagination">
                        <li className="page-item page-link">
                            <>
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </>
                        </li>
                        
                        <li className="page-item page-link">1</li>
                        <li className="page-item page-link active">2</li>
                        <li className="page-item page-link">3</li>

                        <li className="page-item page-link">
                            <>
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </>
                        </li>

                    </ul>

            </div>

        </nav>

    </div>
}


export default Navbar;