import { DogCard } from '@/components/DogCard';
import { mockDogs } from '@/data/dogs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Wifi } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium">NFC智能宠物标签系统</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-slide-up">
              🐕 小狗身份管理系统
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '200ms'}}>
              通过NFC技术，轻松管理和查询宠物健康信息、疫苗记录和联系方式
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center hover:shadow-dog-card transition-all duration-300 animate-slide-up" style={{animationDelay: '400ms'}}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">NFC快速识别</h3>
                <p className="text-sm text-muted-foreground">轻触即可获取完整宠物信息</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-dog-card transition-all duration-300 animate-slide-up" style={{animationDelay: '600ms'}}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">实时健康监控</h3>
                <p className="text-sm text-muted-foreground">疫苗状态和健康信息一目了然</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-dog-card transition-all duration-300 animate-slide-up" style={{animationDelay: '800ms'}}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-xl">🏠</span>
                </div>
                <h3 className="font-semibold mb-2">紧急联系信息</h3>
                <p className="text-sm text-muted-foreground">快速联系宠物主人和兽医</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Dogs Gallery */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            注册宠物信息
          </h2>
          <p className="text-muted-foreground mb-6">
            点击任意小狗查看详细信息，或使用NFC标签直接访问
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge variant="secondary">总计 {mockDogs.length} 只</Badge>
            <Badge className="bg-green-500 text-white">
              健康 {mockDogs.filter(d => d.healthStatus === 'excellent' || d.healthStatus === 'good').length} 只
            </Badge>
            <Badge variant="destructive">
              需注意 {mockDogs.filter(d => d.hasBeenAggressive).length} 只
            </Badge>
          </div>
        </div>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDogs.map((dog, index) => (
            <div 
              key={dog.id} 
              className="animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${3 + (index % 3)}s`
              }}
            >
              <DogCard dog={dog} index={index} />
            </div>
          ))}
        </div>

        {/* NFC Instructions */}
        <Card className="mt-16 bg-gradient-warm text-white border-0">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">如何使用NFC标签</h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg opacity-90 mb-6">
                将启用NFC功能的手机靠近宠物标签，即可自动跳转到对应的宠物信息页面
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                  <p>确保手机NFC功能已开启</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                  <p>将手机靠近宠物NFC标签</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                  <p>自动跳转到宠物信息页面</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;