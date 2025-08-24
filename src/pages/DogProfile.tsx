import { useParams, useNavigate } from 'react-router-dom';
import { mockDogs } from '@/data/dogs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, MapPin, AlertTriangle, Heart, Shield, Stethoscope } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function DogProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dog = mockDogs.find(d => d.id === id);

  if (!dog) {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">未找到小狗信息</h2>
            <p className="text-muted-foreground mb-4">请检查NFC标签或联系管理员</p>
            <Button onClick={() => navigate('/')} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getHealthStatusColor = (status: typeof dog.healthStatus) => {
    switch (status) {
      case 'excellent': return 'bg-green-500 text-white';
      case 'good': return 'bg-primary text-primary-foreground';
      case 'fair': return 'bg-orange-500 text-white';
      case 'needs_attention': return 'bg-red-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getVaccineStatusColor = (status: 'current' | 'overdue' | 'upcoming') => {
    switch (status) {
      case 'current': return 'bg-green-500 text-white';
      case 'overdue': return 'bg-red-500 text-white';
      case 'upcoming': return 'bg-orange-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getVaccineStatusText = (status: 'current' | 'overdue' | 'upcoming') => {
    switch (status) {
      case 'current': return '有效';
      case 'overdue': return '过期';
      case 'upcoming': return '即将到期';
      default: return '未知';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回首页
        </Button>

        {/* Hero Section */}
        <Card className="mb-6 overflow-hidden shadow-dog-card">
          <div className="relative">
            <img 
              src={dog.image} 
              alt={dog.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-3xl font-bold mb-2">{dog.name}</h1>
              <p className="text-lg opacity-90">{dog.breed} • {dog.age}岁</p>
            </div>
            <div className="absolute top-4 right-4">
              <Badge className={getHealthStatusColor(dog.healthStatus)}>
                {dog.healthStatus === 'excellent' ? '健康优良' : 
                 dog.healthStatus === 'good' ? '健康良好' : 
                 dog.healthStatus === 'fair' ? '基本健康' : '需要关注'}
              </Badge>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vaccination Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                疫苗信息
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {Object.entries(dog.vaccinations).map(([vaccine, info]) => (
                  <div key={vaccine} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">
                        {vaccine === 'rabies' ? '狂犬病疫苗' : 
                         vaccine === 'dhpp' ? '四联疫苗' : '犬窝咳疫苗'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        接种: {info.date} | 下次: {info.nextDue}
                      </p>
                    </div>
                    <Badge className={getVaccineStatusColor(info.status)}>
                      {getVaccineStatusText(info.status)}
                    </Badge>
                  </div>
                ))}
              </div>
              {dog.microchipId && (
                <>
                  <Separator />
                  <div>
                    <p className="font-medium">芯片编号</p>
                    <p className="text-sm text-muted-foreground">{dog.microchipId}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Health & Behavior */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                健康与行为
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">健康状况</p>
                <Badge className={getHealthStatusColor(dog.healthStatus)}>
                  {dog.healthStatus === 'excellent' ? '健康优良' : 
                   dog.healthStatus === 'good' ? '健康良好' : 
                   dog.healthStatus === 'fair' ? '基本健康' : '需要关注'}
                </Badge>
              </div>
              
              <div>
                <p className="font-medium flex items-center gap-2">
                  {dog.hasBeenAggressive ? (
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  ) : (
                    <Shield className="w-4 h-4 text-green-500" />
                  )}
                  攻击行为记录
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {dog.aggressionNotes}
                </p>
              </div>

              {dog.allergies.length > 0 && (
                <div>
                  <p className="font-medium">过敏信息</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {dog.allergies.map((allergy, index) => (
                      <Badge key={index} variant="secondary">{allergy}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {dog.medications.length > 0 && (
                <div>
                  <p className="font-medium">用药信息</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {dog.medications.map((med, index) => (
                      <Badge key={index} variant="outline">{med}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Owner Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                联系信息
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">主人姓名</p>
                <p className="text-muted-foreground">{dog.owner.name}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href={`tel:${dog.owner.phone}`} className="text-primary hover:underline">
                  {dog.owner.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${dog.owner.email}`} className="text-primary hover:underline">
                  {dog.owner.email}
                </a>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <p className="text-muted-foreground">{dog.owner.address}</p>
              </div>
              
              <Separator />
              
              <div>
                <p className="font-medium">紧急联系人</p>
                <p className="text-muted-foreground">{dog.owner.emergencyContact}</p>
              </div>
            </CardContent>
          </Card>

          {/* Veterinary Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary" />
                兽医信息
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">{dog.vetInfo.clinicName}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={`tel:${dog.vetInfo.phone}`} className="text-primary hover:underline">
                    {dog.vetInfo.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-primary mt-1" />
                  <p className="text-muted-foreground">{dog.vetInfo.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* NFC Info */}
        <Card className="mt-6">
          <CardContent className="p-6 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-medium">NFC ID: {dog.nfcId}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              使用NFC设备扫描标签可直接跳转到此页面
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}