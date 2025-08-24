import { Dog } from '@/types/dog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface DogCardProps {
  dog: Dog;
  index: number;
}

export function DogCard({ dog, index }: DogCardProps) {
  const navigate = useNavigate();

  const getHealthStatusColor = (status: Dog['healthStatus']) => {
    switch (status) {
      case 'excellent': return 'bg-green-500 text-white';
      case 'good': return 'bg-primary text-primary-foreground';
      case 'fair': return 'bg-orange-500 text-white';
      case 'needs_attention': return 'bg-red-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getHealthStatusText = (status: Dog['healthStatus']) => {
    switch (status) {
      case 'excellent': return '健康优良';
      case 'good': return '健康良好';
      case 'fair': return '基本健康';
      case 'needs_attention': return '需要关注';
      default: return '未知';
    }
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-dog-card hover:-translate-y-2 bg-card border-border overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={() => navigate(`/dog/${dog.id}`)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={dog.image} 
          alt={dog.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <Badge 
            className={getHealthStatusColor(dog.healthStatus)}
          >
            {getHealthStatusText(dog.healthStatus)}
          </Badge>
        </div>
        {dog.hasBeenAggressive && (
          <div className="absolute top-2 left-2">
            <Badge variant="destructive">
              需注意
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {dog.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{dog.breed} • {dog.age}岁</p>
        <p className="text-xs text-muted-foreground mb-3">NFC: {dog.nfcId}</p>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-foreground font-medium">{dog.owner.name}</p>
          <div className="w-6 h-6 rounded-full bg-gradient-primary animate-dog-bounce"></div>
        </div>
      </div>
    </Card>
  );
}