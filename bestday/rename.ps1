$files = Get-ChildItem -File | Sort-Object LastWriteTime
$i = 1
foreach ($f in $files) {
    Rename-Item $f.FullName -NewName "work$i.jpg"
    $i++
}