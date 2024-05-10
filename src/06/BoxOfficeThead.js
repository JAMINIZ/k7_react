
export default function BoxOfficeThead() {
    return (
        <thead
            className="border-b border-neutral-200 font-medium">
            <tr className="bg-black text-white font-bold">
                <th scope="col" className="px-6 py-3 text-center">순위</th>
                <th scope="col" className="px-6 py-3 text-center">영화명</th>
                <th scope="col" className="px-6 py-3 text-center">매출액</th>
                <th scope="col" className="px-6 py-3 text-center">관객수</th>
                <th scope="col" className="px-6 py-3 text-center">증감율</th>
            </tr>
        </thead>
    )
}
