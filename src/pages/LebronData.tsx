import { useEffect, useState } from "react"
import '../styles/LebronData.css'
const LebronData = () => {
    interface dataType {
        id: number,
        pts: number,
        ast: number,
        reb: number,
        stl: number,
        blk: number,
        game: game
    }
    interface game {
        date: string
    }
    let [matchdata, setMatchData] = useState<dataType[]>([]);
    let [page, setPage] = useState(1);
    let [pageLength, setPageLength] = useState(1)
    useEffect(() => {
        const getLebronData = async () => {
            const res = await (await fetch(`https://www.balldontlie.io/api/v1/stats?player_ids[]=237&page=${page}`)).json();
            setMatchData(res.data)
            setPageLength(res.meta.total_pages)
            if (pageLength === 1) {
                console.log('data not fetching yettt')
            } else {
                console.log('success')
                console.log('pageLength', pageLength)
            }
            if (matchdata.length === 0) {
                console.log('not yet..')
            } else {
                console.log('success')
                console.log('matchData', matchdata)
            }
        }
        getLebronData()
    }, [page])
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
            <div className="matchDataContainer">
                {matchdata.map((el) => (
                    <div key={el.id} className="matchDataBox">
                        <h3 className="dataText date">{el.game.date.slice(0, 10)}</h3>
                        <h3 className="dataText">득점: {el.pts}</h3>
                        <h3 className="dataText">도움: {el.ast}</h3>
                        <h3 className="dataText">리바운드: {el.reb}</h3>
                        <h3 className="dataText">스틸: {el.stl}</h3>
                        <h3 className="dataText">블록: {el.blk}</h3>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {page > 1 && <span onClick={() => { leftArrowFunction() }}>ᐊ</span>}
                {showPagination()}
                {page < pageLength - 10 && <span onClick={() => { rightArrowFunction() }}>ᐅ</span>}
            </div>
        </div>
    )
}

export default LebronData;