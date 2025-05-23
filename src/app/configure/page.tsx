import ConfigurationPanel from '@/components/tyrone-time/configuration-panel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ConfigurePage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
          Server Configuration
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Manage your TyroneTime RTSP server settings.
        </p>
      </section>
      
      <Card className="w-full max-w-3xl mx-auto shadow-2xl">
        <CardHeader>
          <CardTitle>Streaming Parameters</CardTitle>
          <CardDescription>
            Define the core settings for your RTSP server. These settings will be saved to config.json.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ConfigurationPanel />
        </CardContent>
      </Card>
    </div>
  );
}
