import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Send, AlertCircle, FileText, User, Briefcase } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface FixesFormProps {
  lang: 'ES' | 'EN';
  setLang?: (lang: 'ES' | 'EN') => void;
}

const FixesForm = ({ lang, setLang }: FixesFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [urlError, setUrlError] = useState('');
  
  const [formData, setFormData] = useState({
    // Información del cliente
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    
    // Información del proyecto
    projectName: '',
    projectType: '',
    projectUrl: '',
    
    // Sección de conformidad
    workingFeatures: '',
    satisfiedElements: '',
    
    // Sección de problemas
    issuesDescription: '',
    specificProblems: '',
    priorityLevel: 'medium',
    
    // Información adicional
    additionalNotes: '',
    preferredContactMethod: 'email'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Validación de email en tiempo real
    if (field === 'clientEmail') {
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (value.trim() === '') {
        setEmailError('');
      } else if (!emailRegex.test(value)) {
        setEmailError(lang === 'ES' ? 'Formato de email inválido' : 'Invalid email format');
      } else {
        setEmailError('');
      }
    }

    // Validación de teléfono en tiempo real
    if (field === 'clientPhone') {
      const phoneRegex = /^[\d\s\+\-\(\)]*$/;
      const digitsOnly = value.replace(/\D/g, ''); // Solo números para contar
      
      if (value.trim() === '') {
        setPhoneError('');
      } else if (!phoneRegex.test(value)) {
        setPhoneError(lang === 'ES' ? 'Solo se permiten números y símbolos telefónicos' : 'Only numbers and phone symbols allowed');
      } else if (digitsOnly.length < 8) {
        setPhoneError(lang === 'ES' ? 'El teléfono debe tener al menos 8 dígitos' : 'Phone must be at least 8 digits');
      } else if (digitsOnly.length > 13) {
        setPhoneError(lang === 'ES' ? 'El teléfono no puede tener más de 13 dígitos' : 'Phone cannot be more than 13 digits');
      } else {
        setPhoneError('');
      }
    }

    // Validación de URL en tiempo real
    if (field === 'projectUrl') {
      if (value.trim() === '') {
        setUrlError('');
      } else {
        // Validación muy simple de URL - solo verifica que tenga un punto
        const hasDot = value.includes('.');
        const hasValidChars = /^[a-zA-Z0-9.-]+$/.test(value.replace(/https?:\/\//, '').replace(/www\./, ''));
        if (!hasDot || !hasValidChars) {
          setUrlError(lang === 'ES' ? 'Formato de URL inválido' : 'Invalid URL format');
        } else {
          setUrlError('');
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.clientName.trim() || !formData.clientEmail.trim() || !formData.projectName.trim() || !formData.issuesDescription.trim()) {
      setShowErrors(true);
      toast({
        title: lang === 'ES' ? 'Campos incompletos' : 'Incomplete fields',
        description: lang === 'ES' 
          ? 'Por favor completá los campos obligatorios: Nombre, Email, Nombre del proyecto y Descripción de problemas.'
          : 'Please fill in the required fields: Name, Email, Project name and Issues description.',
        variant: 'destructive',
      });
      return;
    }

    // Validación de email
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(formData.clientEmail)) {
      setShowErrors(true);
      setEmailError(lang === 'ES' ? 'Formato de email inválido' : 'Invalid email format');
      toast({
        title: lang === 'ES' ? 'Email inválido' : 'Invalid email',
        description: lang === 'ES' 
          ? 'Por favor ingresá un email válido.'
          : 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    // Validación de teléfono (si se ingresó)
    if (formData.clientPhone.trim() !== '') {
      const phoneDigits = formData.clientPhone.replace(/\D/g, '');
      if (phoneDigits.length < 8) {
        setShowErrors(true);
        setPhoneError(lang === 'ES' ? 'El teléfono debe tener al menos 8 dígitos' : 'Phone must be at least 8 digits');
        toast({
          title: lang === 'ES' ? 'Teléfono inválido' : 'Invalid phone',
          description: lang === 'ES' 
            ? 'El teléfono debe tener al menos 8 dígitos.'
            : 'Phone must be at least 8 digits.',
          variant: 'destructive',
        });
        return;
      } else if (phoneDigits.length > 13) {
        setShowErrors(true);
        setPhoneError(lang === 'ES' ? 'El teléfono no puede tener más de 13 dígitos' : 'Phone cannot be more than 13 digits');
        toast({
          title: lang === 'ES' ? 'Teléfono inválido' : 'Invalid phone',
          description: lang === 'ES' 
            ? 'El teléfono no puede tener más de 13 dígitos.'
            : 'Phone cannot be more than 13 digits.',
          variant: 'destructive',
        });
        return;
      }
    }

    // Validación de URL (si se ingresó)
    if (formData.projectUrl.trim() !== '') {
      const hasDot = formData.projectUrl.includes('.');
      const hasValidChars = /^[a-zA-Z0-9.-]+$/.test(formData.projectUrl.replace(/https?:\/\//, '').replace(/www\./, ''));
      console.log('Validating URL:', formData.projectUrl, 'Has dot:', hasDot, 'Valid chars:', hasValidChars);
      if (!hasDot || !hasValidChars) {
        setShowErrors(true);
        setUrlError(lang === 'ES' ? 'Formato de URL inválido' : 'Invalid URL format');
        toast({
          title: lang === 'ES' ? 'URL inválida' : 'Invalid URL',
          description: lang === 'ES' 
            ? 'Por favor ingresá una URL válida.'
            : 'Please enter a valid URL.',
          variant: 'destructive',
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Envío con EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID_FIXES || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FIXES || '',
        {
          // Información del cliente
          client_name: formData.clientName,
          client_email: formData.clientEmail,
          client_phone: formData.clientPhone,
          
          // Información del proyecto
          project_name: formData.projectName,
          project_type: formData.projectType,
          project_url: formData.projectUrl,
          
          // Sección de conformidad
          working_features: formData.workingFeatures,
          satisfied_elements: formData.satisfiedElements,
          
          // Sección de problemas
          issues_description: formData.issuesDescription,
          specific_problems: formData.specificProblems,
          priority_level: formData.priorityLevel,
          
          // Información adicional
          additional_notes: formData.additionalNotes,
          preferred_contact_method: formData.preferredContactMethod,
          
          // Información del formulario
          form_type: 'Fixes Report',
          submission_date: new Date().toLocaleDateString(),
          submission_time: new Date().toLocaleTimeString()
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY_FIXES || ''
      );
      
      toast({
        title: lang === 'ES' ? '¡Reporte enviado!' : 'Report sent!',
        description: lang === 'ES' 
          ? 'Tu reporte de ajustes ha sido enviado exitosamente. Revisaremos tu feedback y nos pondremos en contacto contigo pronto.'
          : 'Your fixes report has been sent successfully. We will review your feedback and contact you soon.',
        variant: 'default',
      });

      // Reset form
      setFormData({
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        projectName: '',
        projectType: '',
        projectUrl: '',
        workingFeatures: '',
        satisfiedElements: '',
        issuesDescription: '',
        specificProblems: '',
        priorityLevel: 'medium',
        additionalNotes: '',
        preferredContactMethod: 'email'
      });

      // Reset errors
      setShowErrors(false);
      setEmailError('');
      setPhoneError('');
      setUrlError('');

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: lang === 'ES' ? 'Error al enviar' : 'Submission error',
        description: lang === 'ES' 
          ? 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente o contactanos directamente.'
          : 'There was an error submitting the form. Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const priorityOptions = [
    { value: 'low', label: lang === 'ES' ? 'Baja' : 'Low' },
    { value: 'medium', label: lang === 'ES' ? 'Media' : 'Medium' },
    { value: 'high', label: lang === 'ES' ? 'Alta' : 'High' }
  ];

  const contactMethods = [
    { value: 'email', label: lang === 'ES' ? 'Email' : 'Email' },
    { value: 'phone', label: lang === 'ES' ? 'Teléfono' : 'Phone' },
    { value: 'whatsapp', label: 'WhatsApp' }
  ];

  // Funciones de validación por sección
  const isClientInfoComplete = () => {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return formData.clientName.trim() !== '' && 
           formData.clientEmail.trim() !== '' && 
           emailRegex.test(formData.clientEmail);
  };

  const isProjectInfoComplete = () => {
    return formData.projectName.trim() !== '';
  };

  const isIssuesComplete = () => {
    return formData.issuesDescription.trim() !== '';
  };

  const getSectionStatus = (isComplete: boolean) => {
    if (!showErrors) return '';
    return isComplete ? 'text-green-500' : 'text-red-500';
  };

  // Función para verificar si el formulario está completo
  const isFormComplete = () => {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const phoneDigits = formData.clientPhone.replace(/\D/g, '');
    const isPhoneValid = formData.clientPhone.trim() === '' || (phoneDigits.length >= 8 && phoneDigits.length <= 13);
    
    return (
      formData.clientName.trim() !== '' &&
      formData.clientEmail.trim() !== '' &&
      emailRegex.test(formData.clientEmail) &&
      formData.projectName.trim() !== '' &&
      formData.issuesDescription.trim() !== '' &&
      isPhoneValid // El teléfono es opcional, pero si se ingresa debe ser válido
    );
  };

  // Función para contar campos completados
  const getCompletedFieldsCount = () => {
    let count = 0;
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    
    if (formData.clientName.trim() !== '') count++;
    if (formData.clientEmail.trim() !== '' && emailRegex.test(formData.clientEmail)) count++;
    if (formData.projectName.trim() !== '') count++;
    if (formData.issuesDescription.trim() !== '') count++;
    return count;
  };

  const totalRequiredFields = 4;
  const completedFields = getCompletedFieldsCount();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-8 pb-16">
      {/* Language Selector - Floating */}
      {setLang && (
        <div className="fixed top-8 right-8 z-50">
          <div className="flex flex-col items-center space-y-2">
            <button
              onClick={() => setLang('ES')}
              className={`px-3 py-2 rounded-md text-xs font-semibold transition-all duration-200 border ${
                lang === 'ES' 
                  ? 'bg-cyber-primary text-white border-cyber-primary shadow-neon' 
                  : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:bg-gray-700/50'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`px-3 py-2 rounded-md text-xs font-semibold transition-all duration-200 border ${
                lang === 'EN' 
                  ? 'bg-cyber-primary text-white border-cyber-primary shadow-neon' 
                  : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:bg-gray-700/50'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'radial-gradient(ellipse 400px 300px at 0% 0%, rgba(137,90,246,0.10) 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 right-0 w-full h-full" style={{ background: 'radial-gradient(ellipse 300px 200px at 100% 100%, rgba(255,62,201,0.10) 0%, transparent 100%)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-primary/30 bg-cyber-primary/10 text-cyber-primary text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            {lang === 'ES' ? 'Reporte de Ajustes' : 'Fixes Report'}
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {lang === 'ES' ? (
              <>
                <span className="text-cyber-primary">Ajustes</span> y{' '}
                <span className="bg-gradient-to-r from-cyber-primary to-cyber-accent bg-clip-text text-transparent">Fixes</span>
              </>
            ) : (
              <>
                <span className="text-cyber-primary">Fixes</span> and{' '}
                <span className="bg-gradient-to-r from-cyber-primary to-cyber-accent bg-clip-text text-transparent">Adjustments</span>
              </>
            )}
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lang === 'ES' 
              ? 'Ayúdanos a mejorar tu proyecto. Reporta lo que está funcionando bien y lo que necesita ajustes.'
              : 'Help us improve your project. Report what is working well and what needs adjustments.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Información del Cliente */}
          <Card className="border-cyber-primary/20 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${getSectionStatus(isClientInfoComplete())}`}>
                <User className="w-5 h-5" />
                {lang === 'ES' ? 'Información del Cliente' : 'Client Information'}
                <Badge variant="outline" className="text-xs bg-red-500/10 border-red-500/30 text-red-500">
                  {lang === 'ES' ? 'Requerido' : 'Required'}
                </Badge>
              </CardTitle>
              <CardDescription>
                {lang === 'ES' 
                  ? 'Datos de contacto para poder comunicarnos contigo'
                  : 'Contact information so we can communicate with you'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {lang === 'ES' ? 'Nombre completo' : 'Full name'} *
                  </label>
                  <Input
                    value={formData.clientName}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    placeholder={lang === 'ES' ? 'Tu nombre completo' : 'Your full name'}
                    required
                    className={showErrors && !formData.clientName.trim() ? 'border-red-500 focus:border-red-500' : ''}
                  />
                  {showErrors && !formData.clientName.trim() && (
                    <div className="text-red-500 text-xs mt-1">
                      {lang === 'ES' ? 'El nombre es obligatorio' : 'Name is required'}
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {lang === 'ES' ? 'Email' : 'Email'} *
                  </label>
                  <Input
                    type="email"
                    value={formData.clientEmail}
                    onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                    placeholder={lang === 'ES' ? 'tu@email.com' : 'your@email.com'}
                    required
                    className={
                      showErrors && !formData.clientEmail.trim() 
                        ? 'border-red-500 focus:border-red-500' 
                        : emailError 
                          ? 'border-red-500 focus:border-red-500' 
                          : ''
                    }
                  />
                  {showErrors && !formData.clientEmail.trim() && (
                    <div className="text-red-500 text-xs mt-1">
                      {lang === 'ES' ? 'El email es obligatorio' : 'Email is required'}
                    </div>
                  )}
                  {emailError && (
                    <div className="text-red-500 text-xs mt-1">
                      {emailError}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {lang === 'ES' ? 'Teléfono' : 'Phone'}
                </label>
                <Input
                  type="tel"
                  value={formData.clientPhone}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Solo permitir números, espacios, +, -, (, )
                    const phoneRegex = /^[\d\s\+\-\(\)]*$/;
                    if (phoneRegex.test(value) || value === '') {
                      handleInputChange('clientPhone', value);
                    }
                  }}
                  placeholder={lang === 'ES' ? '+54 9 11 1234-5678' : '+1 234 567 8900'}
                  onKeyPress={(e) => {
                    // Prevenir entrada de letras
                    const char = String.fromCharCode(e.which);
                    const phoneRegex = /[\d\s\+\-\(\)]/;
                    if (!phoneRegex.test(char) && e.which !== 8 && e.which !== 9) {
                      e.preventDefault();
                    }
                  }}
                  className={phoneError ? 'border-red-500 focus:border-red-500' : ''}
                />
                {phoneError && (
                  <div className="text-red-500 text-xs mt-1">
                    {phoneError}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Información del Proyecto */}
          <Card className="border-cyber-primary/20 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${getSectionStatus(isProjectInfoComplete())}`}>
                <Briefcase className="w-5 h-5" />
                {lang === 'ES' ? 'Información del Proyecto' : 'Project Information'}
                <Badge variant="outline" className="text-xs bg-red-500/10 border-red-500/30 text-red-500">
                  {lang === 'ES' ? 'Requerido' : 'Required'}
                </Badge>
              </CardTitle>
              <CardDescription>
                {lang === 'ES' 
                  ? 'Detalles sobre el proyecto que necesita ajustes'
                  : 'Details about the project that needs adjustments'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {lang === 'ES' ? 'Nombre del proyecto' : 'Project name'} *
                  </label>
                  <Input
                    value={formData.projectName}
                    onChange={(e) => handleInputChange('projectName', e.target.value)}
                    placeholder={lang === 'ES' ? 'Mi Sitio Web' : 'My Website'}
                    required
                    className={showErrors && !formData.projectName.trim() ? 'border-red-500 focus:border-red-500' : ''}
                  />
                  {showErrors && !formData.projectName.trim() && (
                    <div className="text-red-500 text-xs mt-1">
                      {lang === 'ES' ? 'El nombre del proyecto es obligatorio' : 'Project name is required'}
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {lang === 'ES' ? 'Tipo de proyecto' : 'Project type'}
                  </label>
                  <Input
                    value={formData.projectType}
                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                    placeholder={lang === 'ES' ? 'Sitio web, App, Branding...' : 'Website, App, Branding...'}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {lang === 'ES' ? 'URL del proyecto' : 'Project URL'}
                </label>
                <Input
                  type="url"
                  value={formData.projectUrl}
                  onChange={(e) => handleInputChange('projectUrl', e.target.value)}
                  placeholder="https://www.misitio.com"
                  className={urlError ? 'border-red-500 focus:border-red-500' : ''}
                />
                {urlError && (
                  <div className="text-red-500 text-xs mt-1">
                    {urlError}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Lo que está conforme */}
          <Card className="border-green-500/20 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-500">
                <CheckCircle className="w-5 h-5" />
                {lang === 'ES' ? 'Lo que está conforme' : 'What is working well'}
              </CardTitle>
              <CardDescription>
                {lang === 'ES' 
                  ? 'Describe las características que funcionan correctamente y te satisfacen'
                  : 'Describe the features that are working correctly and satisfy you'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {lang === 'ES' ? 'Funcionalidades que funcionan bien' : 'Features working well'}
                </label>
                <Textarea
                  value={formData.workingFeatures}
                  onChange={(e) => handleInputChange('workingFeatures', e.target.value)}
                  placeholder={lang === 'ES' 
                    ? 'Describe las funcionalidades que están funcionando correctamente...'
                    : 'Describe the features that are working correctly...'}
                  rows={3}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {lang === 'ES' ? 'Elementos que te satisfacen' : 'Elements you are satisfied with'}
                </label>
                <Textarea
                  value={formData.satisfiedElements}
                  onChange={(e) => handleInputChange('satisfiedElements', e.target.value)}
                  placeholder={lang === 'ES' 
                    ? 'Menciona los elementos del diseño, funcionalidad o contenido que te gustan...'
                    : 'Mention the design, functionality or content elements you like...'}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Lo que necesita ajustes */}
          <Card className="border-orange-500/20 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${getSectionStatus(isIssuesComplete())}`}>
                <XCircle className="w-5 h-5" />
                {lang === 'ES' ? 'Lo que necesita ajustes' : 'What needs adjustments'}
                <Badge variant="outline" className="text-xs bg-red-500/10 border-red-500/30 text-red-500">
                  {lang === 'ES' ? 'Requerido' : 'Required'}
                </Badge>
              </CardTitle>
              <CardDescription>
                {lang === 'ES' 
                  ? 'Describe los problemas y cambios que necesitas'
                  : 'Describe the issues and changes you need'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {lang === 'ES' ? 'Descripción de problemas' : 'Issues description'} *
                </label>
                <Textarea
                  value={formData.issuesDescription}
                  onChange={(e) => handleInputChange('issuesDescription', e.target.value)}
                  placeholder={lang === 'ES' 
                    ? 'Describe detalladamente los problemas que has encontrado...'
                    : 'Describe in detail the issues you have found...'}
                  rows={4}
                  required
                  className={showErrors && !formData.issuesDescription.trim() ? 'border-red-500 focus:border-red-500' : ''}
                />
                {showErrors && !formData.issuesDescription.trim() && (
                  <div className="text-red-500 text-xs mt-1">
                    {lang === 'ES' ? 'La descripción de problemas es obligatoria' : 'Issues description is required'}
                  </div>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {lang === 'ES' ? 'Problemas específicos' : 'Specific problems'}
                </label>
                <Textarea
                  value={formData.specificProblems}
                  onChange={(e) => handleInputChange('specificProblems', e.target.value)}
                  placeholder={lang === 'ES' 
                    ? 'Menciona problemas específicos como errores, bugs, problemas de diseño...'
                    : 'Mention specific issues like errors, bugs, design problems...'}
                  rows={3}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {lang === 'ES' ? 'Nivel de prioridad' : 'Priority level'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {priorityOptions.map((option) => (
                    <Button
                      key={option.value}
                      type="button"
                      variant={formData.priorityLevel === option.value ? 'cyber' : 'outline'}
                      size="sm"
                      onClick={() => handleInputChange('priorityLevel', option.value)}
                      className="text-xs"
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información adicional */}
          <Card className="border-cyber-accent/20 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-cyber-accent">
                <AlertCircle className="w-5 h-5" />
                {lang === 'ES' ? 'Información adicional' : 'Additional information'}
              </CardTitle>
              <CardDescription>
                {lang === 'ES' 
                  ? 'Cualquier información adicional que consideres importante'
                  : 'Any additional information you consider important'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {lang === 'ES' ? 'Notas adicionales' : 'Additional notes'}
                </label>
                <Textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  placeholder={lang === 'ES' 
                    ? 'Cualquier comentario adicional, sugerencias o información que quieras compartir...'
                    : 'Any additional comments, suggestions or information you want to share...'}
                  rows={3}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {lang === 'ES' ? 'Método de contacto preferido' : 'Preferred contact method'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {contactMethods.map((method) => (
                    <Button
                      key={method.value}
                      type="button"
                      variant={formData.preferredContactMethod === method.value ? 'cyber' : 'outline'}
                      size="sm"
                      onClick={() => handleInputChange('preferredContactMethod', method.value)}
                      className="text-xs"
                    >
                      {method.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Indicator */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-sm text-muted-foreground">
                {lang === 'ES' ? 'Progreso del formulario:' : 'Form progress:'}
              </span>
              <span className="text-sm font-medium">
                {completedFields}/{totalRequiredFields}
              </span>
            </div>
            <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyber-primary to-cyber-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedFields / totalRequiredFields) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              variant="cyber"
              disabled={isSubmitting || !isFormComplete()}
              className={`px-8 py-3 text-lg ${!isFormComplete() ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  {lang === 'ES' ? 'Enviando...' : 'Sending...'}
                </div>
              ) : !isFormComplete() ? (
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {lang === 'ES' ? 'Completar campos requeridos' : 'Complete required fields'}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  {lang === 'ES' ? 'Enviar Reporte' : 'Send Report'}
                </div>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FixesForm; 