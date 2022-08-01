const PageButton= ({pg, setPage,isPreviousData})=>{
    return (
        <button
        className="rounded-0 mx-2"
        onClick={()=>(setPage(pg))}
        disabled={isPreviousData}
        >
            {pg}
        </button>
    )
}
export default PageButton