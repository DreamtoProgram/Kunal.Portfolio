Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630

$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)

# High quality rendering settings
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

# 1. Background - Deep Black/Zinc (#09090b)
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 9, 9, 11))
$g.FillRectangle($bgBrush, 0, 0, $width, $height)

# 2. Subtle ambient gradient glow in the top-right
$glowBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(600, 0)),
    (New-Object System.Drawing.Point(1200, 630)),
    [System.Drawing.Color]::FromArgb(35, 39, 39, 42),
    [System.Drawing.Color]::FromArgb(0, 9, 9, 11)
)
$g.FillRectangle($glowBrush, 0, 0, $width, $height)

# 3. Outer Border Card Frame (40px inset)
$frameX = 40
$frameY = 40
$frameW = $width - 80
$frameH = $height - 80
$framePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 39, 39, 42), 2)
$frameBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 15, 15, 18))

function Draw-RoundedRectangle($graphics, $pen, $brush, $x, $y, $w, $h, $radius) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $radius * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    
    if ($brush) { $graphics.FillPath($brush, $path) }
    if ($pen) { $graphics.DrawPath($pen, $path) }
    $path.Dispose()
}

Draw-RoundedRectangle $g $framePen $frameBrush $frameX $frameY $frameW $frameH 24

# 4. Brand Top Bar: Logo + KUNAL
$logoPath = "c:\Users\offic\Desktop\Kunal\portfolio_v2\public\logo.png"
if (Test-Path $logoPath) {
    $logoImg = [System.Drawing.Image]::FromFile($logoPath)
    $logoBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $logoBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 63, 63, 70), 1.5)
    $g.FillEllipse($logoBgBrush, 80, 75, 48, 48)
    $g.DrawEllipse($logoBorderPen, 80, 75, 48, 48)
    $g.DrawImage($logoImg, 84, 79, 40, 40)
    $logoImg.Dispose()
}

$brandFont = New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Bold)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.DrawString("KUNAL", $brandFont, $whiteBrush, 140, 83)

# Status Pill Badge on the right
$pillX = 860
$pillY = 78
$pillW = 250
$pillH = 40
$pillBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 24, 24, 27))
$pillBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 63, 63, 70), 1.5)
Draw-RoundedRectangle $g $pillBorder $pillBg $pillX $pillY $pillW $pillH 20

# Emerald green live dot
$greenDotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 52, 211, 153))
$g.FillEllipse($greenDotBrush, $pillX + 16, $pillY + 15, 10, 10)

$pillFont = New-Object System.Drawing.Font("Segoe UI", 11, [System.Drawing.FontStyle]::Bold)
$pillTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 228, 228, 231))
$g.DrawString("OPEN TO OPPORTUNITIES", $pillFont, $pillTextBrush, $pillX + 34, $pillY + 11)

# 5. Right Column: Profile Picture in sleek circular frame
$profilePath = "c:\Users\offic\Desktop\Kunal\portfolio_v2\public\profile.png"
if (Test-Path $profilePath) {
    $profileImg = [System.Drawing.Image]::FromFile($profilePath)
    $avatarX = 835
    $avatarY = 165
    $avatarSize = 255
    
    # Outer decorative glow ring
    $glowPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(50, 255, 255, 255), 6)
    $g.DrawEllipse($glowPen, $avatarX - 4, $avatarY - 4, $avatarSize + 8, $avatarSize + 8)
    
    # Clip to circle
    $clipPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $clipPath.AddEllipse($avatarX, $avatarY, $avatarSize, $avatarSize)
    $oldClip = $g.Clip
    $g.SetClip($clipPath)
    $g.DrawImage($profileImg, $avatarX, $avatarY, $avatarSize, $avatarSize)
    $g.Clip = $oldClip
    $clipPath.Dispose()
    
    # Clean border ring
    $avatarBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 113, 113, 122), 3)
    $g.DrawEllipse($avatarBorderPen, $avatarX, $avatarY, $avatarSize, $avatarSize)
    $profileImg.Dispose()
}

# 6. Main Headline (Left Column)
$titleFont = New-Object System.Drawing.Font("Segoe UI", 44, [System.Drawing.FontStyle]::Bold)
$g.DrawString("Kunal Kumar Singh", $titleFont, $whiteBrush, 80, 175)

# Subtitle
$subtitleFont = New-Object System.Drawing.Font("Segoe UI", 24, [System.Drawing.FontStyle]::Bold)
$subtitleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 212, 212, 216))
$g.DrawString("AI & Data Engineering Student", $subtitleFont, $subtitleBrush, 82, 250)

# Bio description line
$descFont = New-Object System.Drawing.Font("Segoe UI", 15, [System.Drawing.FontStyle]::Regular)
$descBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 161, 161, 170))
$g.DrawString("Building practical, intelligent systems with data, logic, and modern software.", $descFont, $descBrush, 84, 305)

# 7. Tech Stack Pills
# Python • FastAPI • Machine Learning • Backend Development
$skills = @("Python", "FastAPI", "Machine Learning", "Backend Development")
$tagX = 84
$tagY = 365
$tagFont = New-Object System.Drawing.Font("Segoe UI", 14, [System.Drawing.FontStyle]::Bold)
$tagBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 24, 24, 27))
$tagBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 63, 63, 70), 1.5)
$tagTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 244, 244, 245))

foreach ($skill in $skills) {
    $textSize = $g.MeasureString($skill, $tagFont)
    $tw = [int]$textSize.Width + 28
    $th = 42
    
    Draw-RoundedRectangle $g $tagBorderPen $tagBgBrush $tagX $tagY $tw $th 12
    $g.DrawString($skill, $tagFont, $tagTextBrush, $tagX + 14, $tagY + 8)
    $tagX += $tw + 14
}

# 8. Bottom Meta / URL Bar
$linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 39, 39, 42), 1.5)
$g.DrawLine($linePen, 80, 480, 1110, 480)

$urlFont = New-Object System.Drawing.Font("Segoe UI", 14, [System.Drawing.FontStyle]::Bold)
$urlBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.DrawString("kunal-portfolio.kunalsahil74.workers.dev", $urlFont, $urlBrush, 84, 505)

$lpuFont = New-Object System.Drawing.Font("Segoe UI", 13, [System.Drawing.FontStyle]::Regular)
$grayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 161, 161, 170))
$lpuText = "Lovely Professional University | CGPA 9.03"
$lpuSize = $g.MeasureString($lpuText, $lpuFont)
$g.DrawString($lpuText, $lpuFont, $grayBrush, (1110 - $lpuSize.Width), 507)

# Save high-resolution PNG
$outputPath = "c:\Users\offic\Desktop\Kunal\portfolio_v2\public\og-image.png"
$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()

Write-Host "Clean og-image.png regenerated successfully at $outputPath"
