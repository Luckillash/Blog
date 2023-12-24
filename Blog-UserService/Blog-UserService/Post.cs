using System;
using System.Collections.Generic;

namespace Blog_UserService;

public partial class Post
{
    public long Id { get; set; }

    public long? IdAutor { get; set; }

    public long? IdPostPadre { get; set; }

    public string? Titulo { get; set; }

    public string? MetaTitulo { get; set; }

    public string? Slug { get; set; }

    public string? Resumen { get; set; }

    public bool? Publicado { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? FechaActualizacion { get; set; }

    public DateTime? FechaPublicacion { get; set; }

    public string? Contenido { get; set; }

    public virtual ICollection<Comentario> Comentarios { get; set; } = new List<Comentario>();

    public virtual Usuario? IdAutorNavigation { get; set; }

    public virtual Post? IdPostPadreNavigation { get; set; }

    public virtual ICollection<Post> InverseIdPostPadreNavigation { get; set; } = new List<Post>();

    public virtual ICollection<Metadata> Metadata { get; set; } = new List<Metadata>();
}
