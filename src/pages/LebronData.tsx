import { useEffect, useState, useCallback } from "react"
import '../styles/LebronData.css'
interface matchData {
    id: number,
    ast: number,
    blk: number,
    pts: number,
    reb: number,
    stl: number,
    game: game
}
interface game {
    date: string
}
const LebronData = () => {
    let [matchdata, setMatchData] = useState([]);
    let [page, setPage] = useState(1);
    let [pageLength, setPageLength] = useState(1)
    const getLebronData = useCallback(async () => {
        const res = await (await fetch(`https://www.balldontlie.io/api/v1/stats?player_ids[]=237&page=${page}`)).json();
        setMatchData(res.data)
        setPageLength(res.meta.total_pages)
        console.log('matchData', matchdata)
        console.log('pageLength', pageLength)
    }, [])
    useEffect(() => {
        getLebronData();
    }, [getLebronData]);
    const showLebronMatchData = (params: number) => {
        setPage(params)
    }
    const showPagination = () => {
        let result = []
        if (page < 1 || page > pageLength) {
            result = []
        } else {
            // (page > pageLength - 10) ? setPage(pageLength - 10) : setPage(page);
            for (let i = page; i < page + 10; i++) {
                result.push(<span key={i} className="pagination-number" onClick={() => { showLebronMatchData(i) }}>{i}</span>)
            }
        }
        return result;
    }
    const leftArrowFunction = () => {
        if (page < 10) {
            setPage(1)
        } else {
            setPage(page - 10)
        }
    }
    const rightArrowFunction = () => {
        if (page > pageLength - 10) {
            setPage(pageLength - 10)
        } else {
            setPage(page + 10)
        }
    }
    return (
        <div>
            <h2>Daily Match Data</h2>
            {matchdata.map(({ id, ast, pts, reb, stl }) => (
                <div key={id} className="matchDataContainer">
                    <h3>득점: {pts}</h3>
                    <h3>도움: {ast}</h3>
                    <h3>리바운드: {reb}</h3>
                    <h3>스틸: {stl}</h3>
                    {/* <h3>블록: {blk}</h3>
                    <h3>TIME: {game.date}</h3> */}
                </div>
            ))}
            <div className="pagination">
                {page > 1 && <span onClick={() => { leftArrowFunction() }}>ᐊ</span>}
                {showPagination()}
                {page < pageLength - 10 && <span onClick={() => { rightArrowFunction() }}>ᐅ</span>}
            </div>
        </div>
    )
}

export default LebronData;