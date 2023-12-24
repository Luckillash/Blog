using System;
using System.Collections.Generic;

namespace Blog_UserService;

public partial class Comentario
{
    public long Id { get; set; }

    public long? IdPost { get; set; }

    public long? IdComentarioPadre { get; set; }

    public string? Titulo { get; set; }

    public string? Contenido { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaPublicacion { get; set; }

    public virtual Post? IdPostNavigation { get; set; }
}
