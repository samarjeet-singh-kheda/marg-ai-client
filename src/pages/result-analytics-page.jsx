import LanguageSelector from "@/components/LanguageSelector";
import Sidebar from "@/components/Sidebar";
import TeacherAvatar from "@/components/TeacherAvatar";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  options,
  topPerformingStudents as topStudents,
  performanceData,
} from "@/data/data";

function ResultsAnalyticsPage() {
  const [category, setCategory] = useState("class");
  const [selection, setSelection] = useState("");
  const [chartType, setChartType] = useState("bar");

  // Set initial selection when category changes
  useEffect(() => {
    setSelection(options[category][0]);
  }, [category]);

  return (
    <>
      <Sidebar />
      <header className="ml-[16.975rem] flex items-center justify-between bg-[#F3F4FF] px-10 py-6">
        <h1 className="text-4xl font-bold text-[#303972]">Results Analytics</h1>
        <div className="flex items-center gap-12">
          <LanguageSelector />
          <TeacherAvatar />
        </div>
      </header>

      <div className="ml-[16.975rem] bg-[#F3F4FF]">
        <div className="flex">
          {/* First dropdown */}
          <div className="px-10 py-6">
            <label
              htmlFor="categorization"
              className="mb-2 block text-sm font-medium text-[#1E1E1E]"
            >
              Select Categorization:
            </label>
            <select
              id="categorization"
              className="w-64 rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1E1E1E] focus:border-blue-500 focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="class">Class Wise</option>
              <option value="assessment">Assessment Wise</option>
              <option value="student">Student Wise</option>
            </select>
          </div>

          {/* Second dropdown */}
          <div className="px-10 py-6">
            <label
              htmlFor="selection"
              className="mb-2 block text-sm font-medium text-[#1E1E1E]"
            >
              Select {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
            <select
              id="selection"
              className="w-64 rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1E1E1E] focus:border-blue-500 focus:outline-none"
              value={selection}
              onChange={(e) => setSelection(e.target.value)}
            >
              {options[category].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Performance Chart Section */}
        <div className="px-10 py-6">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#303972]">
                  Performance Analysis
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {category === "class"
                    ? "Class Performance Over Assignments"
                    : category === "assessment"
                      ? "Student Performance by Question"
                      : "Student Performance Across Assessments"}
                </p>
              </div>
              <select
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#303972] transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:outline-none"
                value={chartType}
                onChange={(e) => setChartType(e.target.value)}
              >
                <option value="bar">Bar Chart</option>
                <option value="line">Line Chart</option>
                <option value="area">Area Chart</option>
              </select>
            </div>
            <div className="flex justify-center">
              {renderChart(category, selection, chartType)}
            </div>
          </div>
        </div>

        {/* Top 10 students section */}
        <div className="px-10 py-6">
          <h2 className="mb-6 text-2xl font-bold text-[#303972]">
            Top 10 Students
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {topStudents.map((student, index) => (
              <div
                key={student.name}
                className="flex items-center justify-between rounded-lg bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4FF] text-lg font-bold text-[#303972]">
                    {index + 1}
                  </div>
                  <span className="text-lg font-medium text-[#303972]">
                    {student.name}
                  </span>
                </div>
                <div className="text-lg font-bold text-[#303972]">
                  {student.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultsAnalyticsPage;

const renderChart = (category, selection, chartType) => {
  const data = performanceData[category][selection] || [];
  const ChartComponent =
    chartType === "bar"
      ? BarChart
      : chartType === "line"
        ? LineChart
        : AreaChart;
  const DataComponent =
    chartType === "bar" ? Bar : chartType === "line" ? Line : Area;

  const xDataKey =
    category === "class"
      ? "assignment"
      : category === "assessment"
        ? "question"
        : "assessment";
  const yDataKey = category === "assessment" ? "correctAnswers" : "average";

  return (
    <ChartComponent
      width={800}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <defs>
        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#303972" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#303972" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
      <XAxis
        dataKey={xDataKey}
        stroke="#64748B"
        fontSize={12}
        tickLine={false}
        axisLine={{ stroke: "#E2E8F0" }}
      />
      <YAxis
        stroke="#64748B"
        fontSize={12}
        tickLine={false}
        axisLine={{ stroke: "#E2E8F0" }}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: "white",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          padding: "12px",
        }}
        labelStyle={{
          color: "#303972",
          fontWeight: "bold",
          marginBottom: "4px",
        }}
        itemStyle={{ color: "#303972" }}
      />
      <Legend
        wrapperStyle={{
          paddingTop: "20px",
          textTransform: "capitalize",
        }}
      />
      <DataComponent
        type="monotone"
        dataKey={yDataKey}
        stroke="#303972"
        strokeWidth={2}
        fill={chartType === "bar" ? "#303972" : "url(#colorGradient)"}
        fillOpacity={chartType === "bar" ? 0.8 : 1}
        activeDot={{
          r: 6,
          stroke: "#303972",
          strokeWidth: 2,
          fill: "white",
        }}
        animationDuration={1500}
        animationEasing="ease-in-out"
      />
    </ChartComponent>
  );
};
