import React from 'react';
import { Search, Menu, Mic, Plus, Bell, Home, Scissors, Play, History, ListVideo, Clock, ThumbsUp, ChevronDown, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const videoData = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop',
      duration: '11:41',
      title: '关于八分半下架的说明',
      channel: 'Eight and a Half',
      channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      views: '177万观看',
      time: '5天前',
      date: '2025-08-22'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
      duration: '57:41',
      title: '柴静专访赫恩典："抗战老兵经历无数战，却一个字也不敢许"',
      channel: '柴静 Chai Jing',
      channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b892?w=40&h=40&fit=crop&crop=face',
      views: '68万观看',
      time: '13天前'
    }
  ];

  const shortsData = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=500&fit=crop',
      title: '最近一次是什么时候泡冰水弄晨思回忆?!'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=500&fit=crop',
      title: '因为他们妈妈救了'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=300&h=500&fit=crop',
      title: '邓小平一段有关s964没有被公开的讲话'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=500&fit=crop',
      title: '资本大鳄独家解析樊兆垠后真相'
    },
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=300&h=500&fit=crop',
      title: '越南龙宫'
    }
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r flex-shrink-0">
        <div className="p-4">
          {/* Navigation Menu */}
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-sm font-normal bg-gray-100">
              <Home className="w-5 h-5 mr-3" />
              首页
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm font-normal">
              <Scissors className="w-5 h-5 mr-3" />
              Shorts
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm font-normal">
              <Play className="w-5 h-5 mr-3" />
              订阅
            </Button>
          </div>

          {/* 我 Section */}
          <div className="mt-6">
            <div className="flex items-center text-sm font-medium mb-3">
              <ChevronDown className="w-4 h-4 mr-1" />
              我
            </div>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                <History className="w-5 h-5 mr-3" />
                历史记录
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                <ListVideo className="w-5 h-5 mr-3" />
                播放列表
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                <Play className="w-5 h-5 mr-3" />
                我的视频
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                <Clock className="w-5 h-5 mr-3" />
                稍后观看
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                <ThumbsUp className="w-5 h-5 mr-3" />
                赞过的视频
              </Button>
            </div>
          </div>

          {/* 订阅 Section */}
          <div className="mt-6">
            <div className="flex items-center text-sm font-medium mb-3">
              <ChevronDown className="w-4 h-4 mr-1" />
              订阅
            </div>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-sm font-normal p-2">
                <Avatar className="w-6 h-6 mr-3">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" />
                  <AvatarFallback>HL</AvatarFallback>
                </Avatar>
                Hung-yi Lee
              </Button>
            </div>
          </div>

          {/* 探索 Section */}
          <div className="mt-6">
            <div className="text-sm font-medium mb-3">探索</div>
            <div className="space-y-1 text-sm">
              <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                🎵 音乐
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                🎬 电影
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                📺 直播
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                🎮 游戏
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                🏆 体育
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-4">
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded mr-2 flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-xl font-normal">YouTube</span>
              <span className="text-xs text-gray-500 ml-1">HK</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <div className="relative flex-1">
                <Input 
                  placeholder="搜索" 
                  className="pr-12 border-gray-300 rounded-r-none focus:border-blue-500"
                />
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute right-0 top-0 h-full rounded-l-none border-l-0 border border-gray-300"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
              <Button size="icon" variant="ghost" className="ml-2">
                <Mic className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="flex items-center">
              <Plus className="w-5 h-5 mr-1" />
              创建
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Ad Banner */}
          <div className="mb-6">
            <div className="relative bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 rounded-lg p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium mb-1">AI-first pull request reviewer with</h3>
                  <h3 className="text-lg font-medium mb-2">context-aware feedback</h3>
                  <p className="text-sm opacity-90">赞助商广告 • CodeRabbit</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="text-blue-600 bg-white hover:bg-gray-100">
                    观看
                  </Button>
                  <Button variant="outline" className="text-blue-600 bg-white hover:bg-gray-100">
                    注册
                  </Button>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white bg-opacity-20 rounded-full p-2">
                <div className="text-3xl font-bold">10x</div>
                <div className="text-xs">faster</div>
              </div>
            </div>
          </div>

          {/* Main Videos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {videoData.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative mb-3">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  {video.date && (
                    <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.date}
                    </div>
                  )}
                </div>
                <div className="flex space-x-3">
                  <Avatar className="w-9 h-9 flex-shrink-0">
                    <AvatarImage src={video.channelAvatar} />
                    <AvatarFallback>{video.channel[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm line-clamp-2 mb-1">
                      {video.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1">{video.channel}</p>
                    <p className="text-xs text-gray-600">{video.views} • {video.time}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Shorts Section */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 mr-2">
                <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-white" />
                </div>
              </div>
              <h2 className="text-xl font-medium">Shorts</h2>
            </div>
            
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {shortsData.map((short) => (
                <div key={short.id} className="flex-shrink-0 w-48 cursor-pointer group">
                  <div className="relative mb-2">
                    <img 
                      src={short.thumbnail} 
                      alt={short.title}
                      className="w-full h-72 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all" />
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2">{short.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;