'use client';

import { useState } from 'react';
import { FileText, Vote, Users, LogOut, Plus } from 'lucide-react';

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'releases' | 'votes' | 'reps'>('releases');

  // Simple demo auth — in production use proper auth (NextAuth, Clerk, etc.)
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === 'winters-admin-2026') {
      setAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  }

  if (!authenticated) {
    return (
      <div className="pt-28 pb-20 min-h-screen bg-canvas flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full border border-border">
          <h1 className="text-2xl font-black text-navy mb-2">Staff Administration</h1>
          <p className="text-muted text-sm mb-6">Enter credentials to access the CMS.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="w-full px-4 py-3 rounded-xl border-2 border-border mb-4 focus:outline-none focus:ring-4 focus:ring-accent-yellow/40"
          />
          <button type="submit" className="btn-accent w-full py-3">
            SIGN IN
          </button>
          <p className="text-xs text-muted mt-4 text-center">
            Demo password: winters-admin-2026
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-canvas">
      <div className="container-main">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="section-title">Administration Portal</h1>
            <p className="text-muted">Manage content, voting records, and district data.</p>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="flex items-center gap-2 text-muted hover:text-navy transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border pb-2">
          {[
            { id: 'releases' as const, label: 'Press Releases', icon: FileText },
            { id: 'votes' as const, label: 'Voting Records', icon: Vote },
            { id: 'reps' as const, label: 'Representatives', icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-navy text-white'
                  : 'text-muted hover:bg-cream'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Creators */}
        <div className="bg-white rounded-3xl border border-border shadow-lg p-8">
          {activeTab === 'releases' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-navy">Create Press Release / Statement</h2>
                <button className="btn-accent flex items-center gap-2">
                  <Plus className="w-4 h-4" /> New Entry
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Category</label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-border">
                    <option>Press Release</option>
                    <option>Statement</option>
                    <option>Opinion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Title</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Photo URL</label>
                  <input type="url" className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Body</label>
                  <textarea rows={8} className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                </div>
                <button className="btn-accent">Publish & Sync to GitHub</button>
              </div>
            </div>
          )}

          {activeTab === 'votes' && (
            <div>
              <h2 className="text-xl font-black text-navy mb-6">Add Voting Record</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1">Bill Number</label>
                    <input type="text" placeholder="H.R. 4021" className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1">Vote</label>
                    <select className="w-full px-4 py-3 rounded-xl border-2 border-border">
                      <option>YEA</option>
                      <option>NAY</option>
                      <option>ABSTAIN</option>
                      <option>PENDING</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Bill Title</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Roll Call Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Legislative Rationale</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                </div>
                <button className="btn-accent">Save Vote & Sync</button>
              </div>
            </div>
          )}

          {activeTab === 'reps' && (
            <div>
              <h2 className="text-xl font-black text-navy mb-6">Representative & District Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Representative Name</label>
                  <input type="text" defaultValue="Representative Winters" className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1">State</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1">District ID</label>
                    <input type="text" placeholder="UT-3" className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Photo URL</label>
                  <input type="url" className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">Biography</label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-xl border-2 border-border" />
                </div>
                <button className="btn-accent">Update Profile & Sync</button>
              </div>
            </div>
          )}
        </div>

        <p className="text-xs text-muted mt-6 text-center">
          Submissions will format clean data files and push commits to the GitHub repository via Octokit (configure GITHUB_TOKEN in environment variables for live sync).
        </p>
      </div>
    </div>
  );
}
