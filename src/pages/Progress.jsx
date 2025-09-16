import React, { useState } from 'react'
import { 
  TrendingUp, Calendar, BarChart3, Activity, Target, Download
} from 'lucide-react';

export default function Progress() {

  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('volume');
  const periods = [
    { id: 'week', label: 'Week', icon: Calendar },
    { id: 'month', label: 'Month', icon: BarChart3 },
    { id: 'year', label: 'Year', icon: TrendingUp }
  ];

  const metrics = [
    { id: 'volume', label: 'Volume', unit: 'lbs', icon: TrendingUp },
    { id: 'frequency', label: 'Frequency', unit: 'workouts', icon: Activity },
    { id: 'duration', label: 'Duration', unit: 'minutes', icon: Calendar }
  ];

  const personalRecords = [
    { exercise: 'Bench Press', weight: '205 lbs', date: '2024-01-15' },
    { exercise: 'Squat', weight: '275 lbs', date: '2024-01-12' },
    { exercise: 'Deadlift', weight: '315 lbs', date: '2024-01-10' },
  ];


    const completedWorkouts = [
    { date: '2025-07-10', totalVolume: 2000, duration: 60 },
    { date: '2025-06-11', totalVolume: 2500, duration: 75 },
    { date: '2025-05-12', totalVolume: 1800, duration: 55 },
    { date: '2025-04-13', totalVolume: 2100, duration: 70 },
    { date: '2024-09-14', totalVolume: 2300, duration: 65 },
    { date: '2024-09-15', totalVolume: 2600, duration: 80 },
    { date: '2024-09-16', totalVolume: 2700, duration: 85 },
    ];

  const getProgressData = () => {
    const now = new Date();
    const periods = [];
    
    if (selectedPeriod === 'week') {
      // Last 7 days
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
        periods.push({
          label: date.toLocaleDateString('en-US', { weekday: 'short' }),
          date: date.toISOString().split('T')[0],
          value: 0
        });
      }
    } else if (selectedPeriod === 'month') {
      // Last 4 weeks
      for (let i = 3; i >= 0; i--) {
        const date = new Date(now.getTime() - i * 7 * 24 * 60 * 60 * 1000);
        periods.push({
          label: `Week ${4 - i}`,
          date: date.toISOString().split('T')[0],
          value: 0
        });
      }
    } else {
      // Last 12 months
      for (let i = 11; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        periods.push({
          label: date.toLocaleDateString('en-US', { month: 'short' }),
          date: date.toISOString().split('T')[0],
          value: 0
        });
      }
    }

    // Calculate values for each period
    periods.forEach(period => {
      const periodWorkouts = completedWorkouts.filter(w => {
        const workoutDate = new Date(w.date);
        const periodDate = new Date(period.date);
        
        if (selectedPeriod === 'week') {
          return workoutDate.toDateString() === periodDate.toDateString();
        } else if (selectedPeriod === 'month') {
          const weekStart = new Date(periodDate.getTime() - periodDate.getDay() * 24 * 60 * 60 * 1000);
          const weekEnd = new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000);
          return workoutDate >= weekStart && workoutDate <= weekEnd;
        } else {
          return workoutDate.getMonth() === periodDate.getMonth() && 
                 workoutDate.getFullYear() === periodDate.getFullYear();
        }
      });

      if (selectedMetric === 'volume') {
        period.value = periodWorkouts.reduce((sum, w) => sum + (w.totalVolume || 100), 100);
      } else if (selectedMetric === 'frequency') {
        period.value = periodWorkouts.length;
      } else {
        period.value = periodWorkouts.reduce((sum, w) => sum + (w.duration || 0), 0);
      }
    });

    return periods;
  };
 const progressData = getProgressData();
 const maxValue = Math.max(...progressData.map(d => d.value));


  return (
<div className='flex justify-center '>
    <div className="p-6 space-y-6 max-w-120 min-w-120 self-center bg-black">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Your Progress</h2>
        <p className="text-neutral-400">Track your fitness journey over time</p>
      </div>

      {/* Key Metrics */}
      <div className="flex  gap-4">
        <div  padding="md" className='w-1/2 bg-neutral-800 border-neutral-700 rounded-md p-2'>
          <div className="text-center">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">100</div>
            <div className="text-neutral-400 text-sm">Total Workouts</div>
          </div>
        </div>
        
        <div padding="md" className='w-1/2 bg-neutral-800 border-neutral-700 rounded-md p-2'>
          <div className="text-center">
            <Activity className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">5</div>
            <div className="text-neutral-400 text-sm">Day Streak</div>
          </div>
        </div>
      </div>

      {/* Chart Controls */}
      <div padding="lg" className='bg-neutral-800 border-neutral-700 rounded-md p-2'>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-lg">Progress Chart</h3>
          </div>

          {/* Period Selector */}
          <div className="flex space-x-2">
            {periods.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedPeriod === period.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                <period.icon className="h-4 w-4 inline mr-1" />
                {period.label}
              </button>
            ))}
          </div>

          {/* Metric Selector */}
          <div className="flex space-x-2">
            {metrics.map((metric) => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedMetric === metric.id
                    ? 'bg-green-500 text-white'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {metric.label}
              </button>
            ))}
          </div>

          {/* Simple Bar Chart */}
          <div className="chart-container">
            <div className="h-48 flex items-end justify-between space-x-2">
              {progressData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t transition-all duration-500 min-h-[4px] `}
                    style={{ 
                      height: `${Math.max((data.value / maxValue) * 100, 10)}px`
                    }}
                  />
                  <div className="text-neutral-400 text-xs mt-2 text-center">
                    {data.label}
                  </div>
                  <div className="text-white text-xs font-semibold">
                    {selectedMetric === 'volume' ? Math.round(data.value / 1000) + 'k' : 
                     selectedMetric === 'duration' ? Math.round(data.value / 60) + 'h' :
                     data.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Personal Records */}
      <div padding="lg" className='bg-neutral-800 border-neutral-700 p-2 rounded-md'>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-lg flex items-center">
            <Target className="h-5 w-5 text-yellow-400 mr-2" />
            Personal Records
          </h3>
        </div>
        
        <div className="space-y-3">
          {personalRecords.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-lg">
              <div>
                <h4 className="text-white font-semibold">{record.exercise}</h4>
                <p className="text-neutral-400 text-sm">{record.date}</p>
              </div>
              <div className="text-right">
                <div className="text-yellow-400 font-bold text-lg">{record.weight}</div>
                <div className="text-neutral-400 text-xs">Personal Best</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workout Frequency */}
      <div padding="lg" className='bg-neutral-800/80 backdrop-blur-md border-neutral-700/50 rounded-md p-2'>
        <h3 className="text-white font-bold text-lg mb-4 flex items-center">
          <Calendar className="h-5 w-5 text-blue-400 mr-2" />
          Workout streak
        </h3>
        
        <div className="flex  gap-2 mb-4">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="text-center w-1/7">
              <div className="text-neutral-400 text-xs mb-2">{day}</div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                Math.random() > 0.3 ? 'bg-green-400 text-white' : 'bg-neutral-700 text-neutral-400'
                
              }`}>
                {index + 10}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
</div>
  );
}
