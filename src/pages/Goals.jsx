import React, { useState } from 'react'

import { 
  Target, Plus, Edit, Trash2, CheckCircle, Clock,
  TrendingUp, Award, Calendar, X, Save
} from 'lucide-react';

const goalTypes = [
    { id: 'weight_loss', label: 'Weight Loss', icon: '🎯', color: 'text-red-400' },
    { id: 'muscle_gain', label: 'Muscle Gain', icon: '💪', color: 'text-green-400' },
    { id: 'strength', label: 'Strength', icon: '🏋️', color: 'text-blue-400' },
    { id: 'endurance', label: 'Endurance', icon: '🏃', color: 'text-purple-400' },
    { id: 'custom', label: 'Custom', icon: '⚡', color: 'text-yellow-400' }
  ];


const hardcodedGoals = [
  {
    id: 'goal1',
    type: 'strength',
    title: 'Bench Press 200lbs',
    description: 'Increase my bench press to 200lbs.',
    targetValue: 200,
    currentValue: 120,
    unit: 'lbs',
    targetDate: '2025-12-31',
    status: 'active',
  },
  {
    id: 'goal2',
    type: 'muscle_gain',
    title: 'Gain 10kg Muscle',
    description: 'Gain 10kg of muscle mass over the next 6 months.',
    targetValue: 10,
    currentValue: 5,
    unit: 'kg',
    targetDate: '2025-06-30',
    status: 'active',
  },
  {
    id: 'goal3',
    type: 'weight_loss',
    title: 'Lose 15kg',
    description: 'Lose 15kg of body weight in the next 4 months.',
    targetValue: 15,
    currentValue: 15,
    unit: 'kg',
    targetDate: '2025-03-30',
    status: 'completed',
  },
  {
    id: 'goal4',
    type: 'endurance',
    title: 'Run a Marathon',
    description: 'Complete a marathon in under 4 hours.',
    targetValue: 42,
    currentValue: 30,
    unit: 'km',
    targetDate: '2025-11-01',
    status: 'active',
  }
];

const goals = hardcodedGoals

  const activeGoals = goals.filter(g => g.status === 'active');
  const completedGoals = goals.filter(g => g.status === 'completed');

export default function Goals() {
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [goalForm, setGoalForm] = useState({
    type: 'strength',
    title: '',
    description: '',
    targetValue: 0,
    currentValue: 0,
    unit: '',
    targetDate: ''
  });
  return (
<div className='flex justify-center'>
    <div className="p-6 space-y-6 min-w-120 max-w-120 bg-neutral-900">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Your Goals</h2>
          <p className="text-neutral-400 text-sm">Track and achieve your fitness objectives</p>
        </div>
        <button
          className='bg-blue-500 p-2 flex rounded-md justify-between gap-2 text-white'
          onClick={() => setShowAddGoal(true)}
        > <Plus/>
          Add Goal
        </button>
      </div>

      {/* Goals Overview */}
      <div className="flex gap-4">
        <div className='w-1/2 bg-neutral-700/50 p-2 rounded-md'>
          <div className="text-center">
            <Target className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{activeGoals.length}</div>
            <div className="text-neutral-400 text-sm">Active Goals</div>
          </div>
        </div>
        
        <div className='w-1/2 bg-neutral-700/50 p-2 rounded-md'>
          <div className="text-center">
            <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{completedGoals.length}</div>
            <div className="text-neutral-400 text-sm">Completed</div>
          </div>
        </div>
      </div>

      {/* Active Goals */}
      {activeGoals.length > 0 && (
        <div padding="lg">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center">
            <Target className="h-5 w-5 text-blue-400 mr-2" />
            Active Goals
          </h3>
          <div className="space-y-4">
            {activeGoals.map((goal) => {
              
              return (
                <div key={goal.id} className="p-4 bg-neutral-800/50 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg text-white">{goal.type}</span>
                        <h4 className="text-white font-semibold">{goal.title}</h4>
                      </div>
                      <p className="text-neutral-400 text-sm mb-3">{goal.description}</p>
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-neutral-300 text-sm">
                          {goal.currentValue} / {goal.targetValue} {goal.unit}
                        </span>
                        <span className="text-blue-400 font-bold text-sm">
                          {goal.currentValue/goal.targetValue * 100}%
                        </span>
                      </div>
                      
                      <div className="progress-bar mb-3">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${80}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className={`flex items-center ${
                          Math.random() < 0.2 ? 'text-neutral-400' : 'text-red-400'
                        }`}>
                          <Clock className="h-3 w-3 mr-1" />
                          {Math.random() > 0 ? `${Math.random()} days left` : 'Overdue'}
                        </span>
                        <span className="text-neutral-500">
                          Target: {goal.targetDate}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <button
                      className='text-yellow-500 size-sm'
                      ><Edit/></button>
                      <button
                      className='text-red-500 size-sm'
                      ><Trash2/></button>
                    </div>
                  </div>
                  
                  {goal.currentValue === goal.targetValue && (
                    <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Goal Achieved!</span>
                      </div>
                      <button
                        className='text-white size-sm'
                      >
                        Mark Complete
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Completed Goals */}
      {completedGoals.length > 0 && (
        <div padding="lg">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center">
            <Award className="h-5 w-5 text-yellow-400 mr-2" />
            Completed Goals
          </h3>
          <div className="space-y-3">
            {completedGoals.slice(0, 3).map((goal) => {
              return (
                <div key={goal.id} className="flex items-center justify-between p-3 bg-neutral-800/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">type</span>
                    <div>
                      <h4 className="text-white font-medium">{goal.title}</h4>
                      <p className="text-neutral-400 text-sm">
                        Completed {new Date(goal.targetDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty State */}
      {activeGoals.length === 0 && completedGoals.length === 0 && (
        <div padding="lg">
          <div className="text-center py-8">
            <Target className="h-16 w-16 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">No Goals Set</h3>
            <p className="text-neutral-400 mb-6">
              Set your first fitness goal to start tracking your progress
            </p>
            <button
              icon={Plus}
              onClick={() => setShowAddGoal(true)}
            >
              Create Your First Goal
            </button>
          </div>
        </div>
      )}

      {/* Add/Edit Goal Modal */}
      {showAddGoal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end">
          <div className="w-full max-w-[428px] mx-auto bg-neutral-900 rounded-t-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">
                  {editingGoal ? 'Edit Goal' : 'Create New Goal'}
                </h3>
                <button
                  className='bg-white'
                  onClick={() => {
                    setShowAddGoal(false);
                    setEditingGoal(null);
                  }}
                  icon={X}
                ><X/></button>
              </div>

              <div className="space-y-6">
                {/* Goal Type */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-200 mb-3">
                    Goal Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {goalTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setGoalForm(prev => ({ ...prev, type: type.id }))}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          goalForm.type === type.id
                            ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                            : 'border-neutral-600 bg-neutral-800/50 text-neutral-300 hover:border-neutral-500'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-xl mb-1">{type.icon}</div>
                          <div className="font-medium text-sm">{type.label}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  label="Goal Title"
                  type="text"
                  value={goalForm.title}
                  onChange={(e) => setGoalForm(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., Bench Press 200lbs"
                  required
                />

                <div>
                  <label className="block text-sm font-semibold text-neutral-200 mb-2">
                    Description
                  </label>
                  <textarea
                    value={goalForm.description}
                    onChange={(e) => setGoalForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your goal in detail..."
                    rows={3}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    label="Target Value"
                    type="number"
                    value={goalForm.targetValue || ''}
                    onChange={(e) => setGoalForm(prev => ({ ...prev, targetValue: Number(e.target.value) }))}
                    placeholder="200"
                    required
                  />
                  <input
                    label="Unit"
                    type="text"
                    value={goalForm.unit}
                    onChange={(e) => setGoalForm(prev => ({ ...prev, unit: e.target.value }))}
                    placeholder="lbs, kg, reps"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    label="Current Value"
                    type="number"
                    value={goalForm.currentValue || ''}
                    onChange={(e) => setGoalForm(prev => ({ ...prev, currentValue: Number(e.target.value) }))}
                    placeholder="150"
                  />
                  <input
                    label="Target Date"
                    type="date"
                    value={goalForm.targetDate}
                    onChange={(e) => setGoalForm(prev => ({ ...prev, targetDate: e.target.value }))}
                    required
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      setShowAddGoal(false);
                      setEditingGoal(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    disabled={!goalForm.title || !goalForm.targetValue || !goalForm.targetDate}
                    icon={Save}
                  >
                    {editingGoal ? 'Update Goal' : 'Create Goal'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
</div>
  );
}
