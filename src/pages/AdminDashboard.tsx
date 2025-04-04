
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

type Registration = {
  id: number;
  name: string;
  type: "surfista" | "marujo" | "equipe";
  status: "pendente" | "pago" | "confirmado";
  phone: string;
  email: string;
  registrationDate: string;
};

// Mock data for demonstration - now with correct explicit typing
const initialRegistrations: Registration[] = [
  {
    id: 1,
    name: "Lucas Silva",
    type: "surfista",
    status: "pendente",
    phone: "(11) 97777-8888",
    email: "lucas@example.com",
    registrationDate: "2025-01-05T14:30:00"
  },
  {
    id: 2,
    name: "Mariana Costa",
    type: "surfista",
    status: "pago",
    phone: "(11) 96666-7777",
    email: "mariana@example.com",
    registrationDate: "2025-01-06T10:15:00"
  },
  {
    id: 3,
    name: "João Santos",
    type: "marujo",
    status: "confirmado",
    phone: "(11) 95555-6666",
    email: "joao@example.com",
    registrationDate: "2025-01-04T09:45:00"
  },
  {
    id: 4,
    name: "Ana Oliveira",
    type: "surfista",
    status: "pago",
    phone: "(11) 94444-5555",
    email: "ana@example.com",
    registrationDate: "2025-01-07T16:20:00"
  },
  {
    id: 5,
    name: "Pedro Lima",
    type: "equipe",
    status: "confirmado",
    phone: "(11) 93333-4444",
    email: "pedro@example.com",
    registrationDate: "2025-01-03T11:10:00"
  }
];

const AdminDashboard = () => {
  const { toast } = useToast();
  const [registrations, setRegistrations] = useState<Registration[]>(initialRegistrations);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null);
  
  useEffect(() => {
    document.title = "Painel Administrativo - ONDA 2025";
  }, []);
  
  // Filter registrations based on search term and filters
  const filteredRegistrations = registrations.filter((reg) => {
    // Search term filter
    const matchesSearch = searchTerm === "" || 
      reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.phone.includes(searchTerm);
    
    // Type filter
    const matchesType = !filterType || reg.type === filterType;
    
    // Status filter
    const matchesStatus = !filterStatus || reg.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  const handleSelectRegistration = (registration: Registration) => {
    setSelectedRegistration(registration);
  };
  
  const handleUpdateStatus = (newStatus: "pendente" | "pago" | "confirmado") => {
    if (!selectedRegistration) return;
    
    const updatedRegistrations = registrations.map((reg) => {
      if (reg.id === selectedRegistration.id) {
        return { ...reg, status: newStatus };
      }
      return reg;
    });
    
    setRegistrations(updatedRegistrations);
    setSelectedRegistration({ ...selectedRegistration, status: newStatus });
    
    toast({
      title: "Status atualizado",
      description: `O status de ${selectedRegistration.name} foi atualizado para ${newStatus}.`,
      variant: "default",
    });
  };
  
  const handleGenerateReport = () => {
    toast({
      title: "Relatório gerado",
      description: "Na versão completa, aqui seria gerado um relatório em PDF ou Excel.",
      variant: "default",
    });
  };
  
  const statusColors = {
    pendente: "bg-yellow-100 text-yellow-800",
    pago: "bg-green-100 text-green-800",
    confirmado: "bg-blue-100 text-blue-800",
  };
  
  const typeLabels = {
    surfista: "Surfista",
    marujo: "Marujo",
    equipe: "Equipe de Apoio",
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-20 bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-onda-blue mb-8">Painel Administrativo - ONDA 2025</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Filters and Search */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-full md:w-1/3">
                  <Input
                    placeholder="Pesquisar por nome, email ou telefone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div className="w-full md:w-1/4">
                  <Select value={filterType || "all"} onValueChange={setFilterType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de Participante" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="surfista">Surfista</SelectItem>
                      <SelectItem value="marujo">Marujo</SelectItem>
                      <SelectItem value="equipe">Equipe de Apoio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="w-full md:w-1/4">
                  <Select value={filterStatus || "all"} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status de Pagamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="pendente">Pendente</SelectItem>
                      <SelectItem value="pago">Pago</SelectItem>
                      <SelectItem value="confirmado">Confirmado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="w-full md:w-1/4 flex justify-end">
                  <Button 
                    variant="outline"
                    onClick={handleGenerateReport}
                    className="w-full md:w-auto"
                  >
                    Gerar Relatório
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Registration List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4 bg-onda-blue text-white">
                  <h2 className="text-xl font-bold">Lista de Inscritos</h2>
                  <p className="text-sm text-white/80">Total: {filteredRegistrations.length} inscritos</p>
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Ação</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRegistrations.length > 0 ? (
                        filteredRegistrations.map((registration) => (
                          <TableRow 
                            key={registration.id} 
                            className={selectedRegistration?.id === registration.id ? "bg-blue-50" : ""}
                          >
                            <TableCell className="font-medium">{registration.name}</TableCell>
                            <TableCell>{typeLabels[registration.type]}</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[registration.status]}`}>
                                {registration.status.charAt(0).toUpperCase() + registration.status.slice(1)}
                              </span>
                            </TableCell>
                            <TableCell>{new Date(registration.registrationDate).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleSelectRegistration(registration)}
                              >
                                Ver detalhes
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                            Nenhum inscrito encontrado com os filtros selecionados.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
            
            {/* Registration Details */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md h-full">
                <div className="p-4 bg-onda-teal text-white">
                  <h2 className="text-xl font-bold">Detalhes do Inscrito</h2>
                </div>
                
                <div className="p-6">
                  {selectedRegistration ? (
                    <div>
                      <h3 className="text-xl font-bold mb-4">{selectedRegistration.name}</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Tipo de Participante</p>
                          <p className="font-medium">{typeLabels[selectedRegistration.type]}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Status</p>
                          <p className="font-medium">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[selectedRegistration.status]}`}>
                              {selectedRegistration.status.charAt(0).toUpperCase() + selectedRegistration.status.slice(1)}
                            </span>
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Contato</p>
                          <p className="font-medium">{selectedRegistration.phone}</p>
                          <p className="font-medium">{selectedRegistration.email}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Data de Inscrição</p>
                          <p className="font-medium">
                            {new Date(selectedRegistration.registrationDate).toLocaleDateString()} - {" "}
                            {new Date(selectedRegistration.registrationDate).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <p className="text-sm text-gray-500 mb-2">Atualizar Status</p>
                        <div className="flex flex-col space-y-2">
                          <Button 
                            variant={selectedRegistration.status === "pendente" ? "default" : "outline"}
                            size="sm"
                            className={selectedRegistration.status === "pendente" ? "bg-yellow-500 hover:bg-yellow-600" : ""}
                            onClick={() => handleUpdateStatus("pendente")}
                          >
                            Pendente
                          </Button>
                          <Button 
                            variant={selectedRegistration.status === "pago" ? "default" : "outline"}
                            size="sm"
                            className={selectedRegistration.status === "pago" ? "bg-green-500 hover:bg-green-600" : ""}
                            onClick={() => handleUpdateStatus("pago")}
                          >
                            Pago
                          </Button>
                          <Button 
                            variant={selectedRegistration.status === "confirmado" ? "default" : "outline"}
                            size="sm"
                            className={selectedRegistration.status === "confirmado" ? "bg-blue-500 hover:bg-blue-600" : ""}
                            onClick={() => handleUpdateStatus("confirmado")}
                          >
                            Confirmado
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <p>Selecione um inscrito para ver os detalhes.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
