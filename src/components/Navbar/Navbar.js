import classes from "./Navbar.module.css";

function Navbar({search, setSearch, page, changePage, totalPages, totalCount, pageSize}){

    
    function searchHandler(e){
        setSearch(e.target.value);
    }

    return <div className={classes["container"]} >
        <nav className="navbar">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={searchHandler} />
            </form>

            <div className={classes["pagination-container"]} >
                    <ul className="pagination">
                        <li className="page-item page-link">
                            <span onClick={ ()=> {changePage(-1)}} >
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </span>
                        </li>
                        <li className="page-item page-link">{page}</li>
                        <li className="page-item page-link">
                            <span onClick={ ()=>{changePage(+1)} } >
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </span>
                        </li>

                    </ul>
            </div>
        </nav>
    </div>
}


export default Navbar;