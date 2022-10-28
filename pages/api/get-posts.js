import {supabase} from "../../services/supabaseClient"

export default async (req, res) => {
    const {data} = await supabase
    .from ("Feed")
    .select("*")
    .order("id", {ascending: false})

    res.status(200).json({data: data})
}