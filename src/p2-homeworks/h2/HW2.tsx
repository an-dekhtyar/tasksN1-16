import React, {useState} from 'react'
import Affairs from './Affairs'
import style from '../../p1-main/m1-ui/u1-app/App.module.css'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'  // need to fix any +
export type AffairType = {
    _id:number
    name: string
    priority: string
    color:string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any  +
    {_id: 1, name: 'React', priority: 'high', color:"red"},
    {_id: 2, name: 'anime', priority: 'low', color: "blue"},
    {_id: 3, name: 'games', priority: 'low', color: "blue"},
    {_id: 4, name: 'work', priority: 'high', color:"red"},
    {_id: 5, name: 'html & css', priority: 'middle', color:"yellow"},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType):Array<AffairType> => { // need to fix any +
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter(a => a.priority === 'high')
    if (filter === 'middle') return affairs.filter(a =>a.priority === 'middle')
    return affairs.filter(a => a.priority === 'low')
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any +
    return affairs.filter(a => a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any +
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any +

    return (
        <div>
            <hr/>
            <span className={style.hw}>#HW2</span>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
