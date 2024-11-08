import { useLoaderData } from "react-router-dom";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from "recharts";


const Statistics = () => {
    const data = useLoaderData();

    return (
        <div className="chart-container mx-auto bg-white p-6 rounded-lg shadow-lg">
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 80,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="product_title" tick={{ fill: "#8884d8" }} />
                    <YAxis tick={{ fill: "#8884d8" }} />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                    <Area type="monotone" dataKey="price" fill="#BF87EE" stroke="#BF87EE" name="Price" />
                    <Bar dataKey="price" barSize={30} fill="#9538E2" name="Price" />
                    <Scatter dataKey="rating" fill="#FF0000" name="Rating" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;